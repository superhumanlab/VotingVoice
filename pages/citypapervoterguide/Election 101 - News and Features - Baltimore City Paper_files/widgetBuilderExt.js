

/* EMBEDHELPER */
/**
* Copyright (c) 2009 James Padolsey
* -------------------------------------------------------
* Dual licensed under the MIT and GPL licenses.
*    - http://www.opensource.org/licenses/mit-license.php
*    - http://www.gnu.org/copyleft/gpl.html
*/
var embedHelper = (
	function() {
	    var a = (
				function() {
				    var b = document.getElementsByTagName("script");
				    return b[b.length - 1];
				}
			)();

	    return {
	        getConfig: function(g) {
	            var b = a.innerHTML,
				d = {},
				c = Array.prototype.slice.call(arguments);
	            try {
	                d = (new Function("return " + b.replace(/\n|\r/g, "")))();
	            } catch (f) { }
	            c.push(d);
	            return this.merge.apply(this, c);
	        },
	        merge: function(g, f) {
	            if (typeof g !== "object") {
	                g = {};
	            }
	            for (var e in f) {
	                if (!f.hasOwnProperty || f.hasOwnProperty(e)) {
	                    var b = f[e];
	                    if (typeof b === "object") {
	                        g[e] = this.merge(g[e], b);
	                        continue;
	                    }
	                    g[e] = b;
	                }
	            }

	            for (var d = 2, c = arguments.length; d < c; d++) {
	                this.merge(g, arguments[d]);
	            }
	            return g;
	        },
	        insert: function(e) {
	            if (e.nodeName && !e.length) {
	                return a.parentNode.insertBefore(e, a);
	            }
	            if (typeof e === "string") {
	                var c = document.createElement("div");
	                c.innerHTML = e;
	                e = c.childNodes;
	            }
	            for (var d = 0, b = e.length || 0; d < b; ++d) {
	                this.insert(e[d]);
	            }
	            return this;
	        },
	        scriptRef: a
	    }
	}
)();
/* ----------- */

/* Widget code */

(function() {

    var userOptions = embedHelper.getConfig({});

    if (typeof (widgetBuilder) == "undefined") {
        widgetBuilder = {};
    }

    var ClientID = "wbjs_" + Math.floor(Math.random() * 10001);
    while (widgetBuilder.hasOwnProperty(ClientID)) { ClientID = "wbjs_" + Math.floor(Math.random() * 10001); }
    if (userOptions.hasOwnProperty("ClientID")) { ClientID = userOptions["ClientID"]; }
    else { userOptions["ClientID"] = ClientID; }


    widgetBuilder[ClientID] = {
        "fParameters": [],
        "parameters": userOptions,
        "toggleViewJSFN": function() { alert(ClientID) },
        "buildQueryString": function() {
            var clientid = ClientID;
            var qsArr = [];
            var wb = widgetBuilder[clientid];
            var params = wb["parameters"];
            var siteAddr = params["siteAddr"];

            var fpCompress = function(fpLst) {
                var rtval = "";
                var rtArr = [];
                var ctypdict = { "category": "c", "attribute": "a", "date": "d", "searchtext": "s", "meta" : "m", "city" : "t", "hood": "h" };
                var cval = "";
                var ctyp = "";
                var fp = {};
                var n, v;
                for (var p in fpLst) {
                    if (fpLst.hasOwnProperty(p)) {
                        fp = fpLst[p];
                        ctyp = ctypdict[fp.type];
                        n = fp.name;
                        v =  fp.value;
                        if (ctyp == "d") {
                            v = n;
                        }

                        cval = [ctyp, n, v].join("|");
                        rtArr.push(cval);
                    }
                }
                return encodeURIComponent( rtArr.join("||") );
            };

            for (var p in params) { if (params.hasOwnProperty(p)) qsArr.push(p + "=" + params[p]); }

            params = wb["fParamsArr"];
            if (typeof(params) !== 'undefined' && params.length > 0) {
                qsArr.push("fParameters=" + fpCompress(params));
            } else {
                qsArr.push("fParameters=" + wb["fParameters"]);
            }

            return (siteAddr + 'userControls/widgetBuilder/results.aspx?' + qsArr.join("&"));
        },
        "dataBind": function(data) {
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            var params = wb.parameters;
            var elwrapset = jQuery("#widgetDataContainer_" + clientid);
            elwrapset.html(data);
            if (params.ucShareThisClass !== "") { elwrapset.find("." + params.ucShareThisClass).click(wb.shareThisItem); }
            if (params.ucImGoingClass !== "") { elwrapset.find("." + params.ucImGoingClass).click(wb.imGoingItem); }
            if (params.ucRemoveGoingClass !== "") { elwrapset.find("." + params.ucRemoveGoingClass).click(wb.removeGoingItem); }
        },
        "pagerLoadData": function(page) {
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            var params = wb["parameters"];
            params["ucPage"] = page;

            jQuery.ajax({
                url: wb.buildQueryString(),
                dataType: "jsonp",
                success: wb.dataBind
            });

        },
        "loadData": function() {
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            jQuery.ajax({
                url: wb.buildQueryString(),
                dataType: "jsonp",
                success: wb.dataBind
            });
        },
        "reloadData": function() {
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            wb.parameters["ClientID"] = clientid;
            jQuery.ajax({
                url: wb.buildQueryString() + "&reload=1",
                dataType: "jsonp",
                success: function(data) {
                    jQuery("#" + ClientID + "_widgetBuilder").replaceWith(data);
                    var clientid = ClientID; ;
                    widgetBuilder[clientid].initBind;
                }
            });
        },
        "shareThisItem": function(e) {
            e.preventDefault();

            var entityType = jQuery(this).attr("entityType");
            var entityId = jQuery(this).attr("entityId");
            var url = jQuery(this).attr("url");
            var title = jQuery(this).attr("title");

            window.open("http://www.facebook.com/sharer.php?u=" + url + "&t=" + title);
            // how do I know it is shared successfully? and act appropriately..
        },
        "imGoingItem": function(e) {
            e.preventDefault();
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            var params = wb["parameters"];
            var siteAddr = params["siteAddr"];
            // is user logged in? If not show so sorry screen

            // presume they are
            var entityType = $(this).attr("entityType");
            var entityId = $(this).attr("entityId");

            var relateTo = entityId;
            if (entityType == "Event") {
                relateTo = $(this).attr("eventOccurenceId");
            }
            var clickedButton = this;

            jQuery.ajax({
                url: siteAddr + 'userControls/widgetBuilder/imgoing.aspx?entityType=' + entityType + '&eid=' + relateTo,
                dataType: "jsonp",
                success: function(data) {
                    var clientid = ClientID;
                    var wb = widgetBuilder[clientid];
                    var params = wb.parameters;
                    // change the class
                    // alert(data);
                    if (data > 0) {
                        jQuery(clickedButton).removeClass(params.ucImGoingClass).addClass(params.ucRemoveGoingClass).unbind("click").click(wb.removeGoingItem);
                    }
                }
            });

            // increment the popularity going count
            jQuery.ajax({
                type: 'GET',
                url: siteAddr + 'userControls/widgetBuilder/updateCount.aspx',
                data: 'action=incrementGoing&eid=' + entityId + '&entityType=' + entityType
            });
        },
        "removeGoingItem": function(e) {
            e.preventDefault();
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            var params = wb["parameters"];
            var siteAddr = params["siteAddr"];
            // is user logged in? If not show so sorry screen (probably are if notgoing is showing)
            // presume they are
            var entityType = $(this).attr("entityType");
            var entityId = $(this).attr("entityId");

            var relateTo = entityId;
            if (entityType == "Event") {
                relateTo = $(this).attr("eventOccurenceId");
            }

            var clickedButton = this;

            jQuery.ajax({
                url: siteAddr + 'userControls/widgetBuilder/removegoing.aspx?etype=' + entityType + '&eid=' + relateTo,
                dataType: "jsonp",
                success: function(data) {
                    var clientid = ClientID;
                    var wb = widgetBuilder[clientid];
                    var params = wb.parameters;
                    // change the class
                    // alert(data);
                    if (data > 0) {
                        jQuery(clickedButton).removeClass(params.ucRemoveGoingClass).addClass(params.ucImGoingClass).unbind("click").click(wb.imGoingItem);
                    }
                }
            });
            jQuery.ajax({
                type: 'GET',
                url: siteAddr + 'userControls/widgetBuilder/updateCount.aspx',
                data: 'action=decrementGoing&eid=' + entityId + '&entityType=' + entityType
            });
            if (params["ucEntityJoin"] === "User") {
                jQuery(this).parents("li:first").hide("slow");
            }
        },
        "initBind": function() {
            var clientid = ClientID;
            var wb = widgetBuilder[clientid];
            var params = wb.parameters;
            var elwrapset = jQuery("#widgetDataContainer_" + clientid);
            if (params.ucShareThisClass !== "") { elwrapset.find("." + params.ucShareThisClass).click(wb.shareThisItem); }
            if (params.ucImGoingClass !== "") { elwrapset.find("." + params.ucImGoingClass).click(wb.imGoingItem); }
            if (params.ucRemoveGoingClass !== "") { elwrapset.find("." + params.ucRemoveGoingClass).click(wb.removeGoingItem); }
        }

    };


    embedHelper.insert("<div id='" + "widgetDataContainer_" + ClientID + "'/>");

    widgetBuilder[ClientID].loadData();


})();
