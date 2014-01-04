

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
    var siteAddr = "";
    var requestStr = "";
    var userOptions = embedHelper.getConfig({});

    if (typeof (widgetBuilder) == "undefined") {
        widgetBuilder = {};
    }

    var makeRequestStr = function() {
        requestStr = "";
        if (userOptions.hasOwnProperty("siteAddr")) {
            siteAddr = userOptions["siteAddr"];
        };
        if (userOptions.hasOwnProperty("ucColumns")) {
            requestStr += "ucColumns=" + userOptions["ucColumns"] + "&";
        };
        if (typeof (userOptions["ucEntityId"]) !== "undefined") {
            requestStr += "ucEntityId=" + userOptions["ucEntityId"] + "&";
        };
        if (typeof (userOptions["ucEntityJoin"]) !== "undefined") {
            requestStr += "ucEntityJoin=" + userOptions["ucEntityJoin"] + "&";
        };
        if (typeof (userOptions["ucInitialViewSetting"]) !== "undefined") {
            requestStr += "ucInitialViewSetting=" + userOptions["ucInitialViewSetting"] + "&";
        };
        if (typeof (userOptions["ucIsExpandable"]) !== "undefined") {
            requestStr += "ucIsExpandable=" + userOptions["ucIsExpandable"] + "&";
        };
        if (typeof (userOptions["ucIsPageable"]) !== "undefined") {
            requestStr += "ucIsPageable=" + userOptions["ucIsPageable"] + "&";
        };
        if (typeof (userOptions["ucItemEndDate"]) !== "undefined") {
            requestStr += "ucItemEndDate=" + userOptions["ucItemEndDate"] + "&";
        };
        if (typeof (userOptions["ucItemStartDate"]) !== "undefined") {
            requestStr += "ucItemStartDate=" + userOptions["ucItemStartDate"] + "&";
        };
        if (typeof (userOptions["ucResultFormat"]) !== "undefined") {
            requestStr += "ucResultFormat=" + userOptions["ucResultFormat"] + "&";
        };
        if (typeof (userOptions["ucResultLimit"]) !== "undefined") {
            requestStr += "ucResultLimit=" + userOptions["ucResultLimit"] + "&";
        };
        if (typeof (userOptions["ucResultList"]) !== "undefined") {
            requestStr += "ucResultList=" + userOptions["ucResultList"] + "&";
        };
        if (typeof (userOptions["ucSelection"]) !== "undefined") {
            requestStr += "ucSelection=" + userOptions["ucSelection"] + "&";
        };
        if (typeof (userOptions["ucTemplate"]) !== "undefined") {
            requestStr += "ucTemplate=" + userOptions["ucTemplate"] + "&";
        };
        if (typeof (userOptions["ucTitle"]) !== "undefined") {
            requestStr += "ucTitle=" + userOptions["ucTitle"] + "&";
        };
        if (typeof (userOptions["ucViewAllLink"]) !== "undefined") {
            requestStr += "ucViewAllLink=" + userOptions["ucViewAllLink"] + "&";
        };
        if (typeof (userOptions["ucViewAllStr"]) !== "undefined") {
            requestStr += "ucViewAllStr=" + userOptions["ucViewAllStr"] + "&";
        };
        if (typeof (userOptions["ucViewLessStr"]) !== "undefined") {
            requestStr += "ucViewLessStr=" + userOptions["ucViewLessStr"] + "&";
        };
        
        
        if (userOptions.hasOwnProperty("ucCssClass")) {
            requestStr += "ucCssClass=" + userOptions["ucCssClass"] + "&";
        };
        if (userOptions.hasOwnProperty("ucSpecified")) {
            requestStr += "ucSpecified=" + userOptions["ucSpecified"] + "&";
        };
        
        // filter ones
        if (userOptions.hasOwnProperty("ucNameTitleLike")) {
            requestStr += "ucNameTitleLike=" + userOptions["ucNameTitleLike"] + "&";
        };
        if (userOptions.hasOwnProperty("ucNeighborhood")) {
            requestStr += "ucNeighborhood=" + userOptions["ucNeighborhood"] + "&";
        };
        if (userOptions.hasOwnProperty("ucCity")) {
            requestStr += "ucCity=" + userOptions["ucCity"] + "&";
        };
        if (userOptions.hasOwnProperty("ucPostalCode")) {
            requestStr += "ucPostalCode=" + userOptions["ucPostalCode"] + "&";
        };
        if (userOptions.hasOwnProperty("ucCategory")) {
            requestStr += "ucCategory=" + userOptions["ucCategory"] + "&";
        };
        if (userOptions.hasOwnProperty("ucTypeCategory")) {
            requestStr += "ucTypeCategory=" + userOptions["ucTypeCategory"] + "&";
        };
        if (userOptions.hasOwnProperty("ucTag")) {
            requestStr += "ucTag=" + userOptions["ucTag"] + "&";
        };
        if (userOptions.hasOwnProperty("ucSubject")) {
            requestStr += "ucSubject=" + userOptions["ucSubject"] + "&";
        };
        if (userOptions.hasOwnProperty("ucVenue")) {
            requestStr += "ucVenue=" + userOptions["ucVenue"] + "&";
        };
        if (userOptions.hasOwnProperty("ucEvent")) {
            requestStr += "ucEvent=" + userOptions["ucEvent"] + "&";
        };
        if (userOptions.hasOwnProperty("ucVenueName")) {
            requestStr += "ucVenueName=" + userOptions["ucVenueName"] + "&";
        };
        if (userOptions.hasOwnProperty("ucEventName")) {
            requestStr += "ucEventName=" + userOptions["ucEventName"] + "&";
        };
        if (userOptions.hasOwnProperty("ucAttribute1")) {
            requestStr += "ucAttribute1=" + userOptions["ucAttribute1"] + "&";
        };
        if (userOptions.hasOwnProperty("ucAttribute2")) {
            requestStr += "ucAttribute2=" + userOptions["ucAttribute2"] + "&";
        };
        if (userOptions.hasOwnProperty("ucAttribute3")) {
            requestStr += "ucAttribute3=" + userOptions["ucAttribute3"] + "&";
        };
        if (userOptions.hasOwnProperty("ucField1")) {
            requestStr += "ucField1=" + userOptions["ucField1"] + "&";
        };
        if (userOptions.hasOwnProperty("ucFieldValue1")) {
            requestStr += "ucFieldValue1=" + userOptions["ucFieldValue1"] + "&";
        };
        if (userOptions.hasOwnProperty("ucField2")) {
            requestStr += "ucField2=" + userOptions["ucField2"] + "&";
        };
        if (userOptions.hasOwnProperty("ucFieldValue2")) {
            requestStr += "ucFieldValue2=" + userOptions["ucFieldValue2"] + "&";
        };
        if (userOptions.hasOwnProperty("ucField3")) {
            requestStr += "ucFieldValue3=" + userOptions["ucFieldValue3"] + "&";
        };
        if (userOptions.hasOwnProperty("ucFieldValue3")) {
            requestStr += "ucFieldValue3=" + userOptions["ucFieldValue3"] + "&";
        };
        if (userOptions.hasOwnProperty("ucHideRecurring")) {
            requestStr += "ucHideRecurring=" + userOptions["ucHideRecurring"];
        };
        if (userOptions.hasOwnProperty("ucSiteLongitude")) {
            requestStr += "ucSiteLongitude=" + userOptions["ucSiteLongitude"];
        };
        if (userOptions.hasOwnProperty("ucSiteLatitude")) {
            requestStr += "ucSiteLatitude=" + userOptions["ucSiteLatitude"];
        };
        if (userOptions.hasOwnProperty("ucSiteRadiusMiles")) {
            requestStr += "ucSiteRadiusMiles=" + userOptions["ucSiteRadiusMiles"];
        };
        if (userOptions.hasOwnProperty("ucUserLongitude")) {
            requestStr += "ucUserLongitude=" + userOptions["ucUserLongitude"];
        };
        if (userOptions.hasOwnProperty("ucUserLatitude")) {
            requestStr += "ucUserLatitude=" + userOptions["ucUserLatitude"];
        };
        if (userOptions.hasOwnProperty("ucUserRadiusMiles")) {
            requestStr += "ucUserRadiusMiles=" + userOptions["ucUserRadiusMiles"];
        };
                
    };

    embedHelper.insert("<div id='mainCalendar'><div id='calendar-wrap'> <div id='calendar'></div> <div id='cal-selection'> Date selected <span></span><a id='calDateAllBtn' href='/Event'></a></div></div><br style='clear:both;'/><div id='pp1'>&nbsp;</div></div>");

    makeRequestStr();
     
    jQuery.ajax({
        url: siteAddr + 'userControls/CalendarMain/results.aspx?' + requestStr,
        dataType: "jsonp",
        jsonpCallbackString: "resultCBFN",
        success: function(data) {
            jQuery("#pp1").html(data);
        }
    });


    jQuery(document).ready(function($) {
        var offset = 22; // sprite height/width, used for day images
        var otherMonthOffset = -offset;
        var activeOffset = -(offset * 2);
        var currDate = new Date();
        var currMonth = currDate.getMonth();
        var currYear = currDate.getFullYear();
        var selMonth = currDate.getMonth();
        var selYear = currDate.getFullYear();
        var selDay = currDate.getDate();
        var currentSelection;
        var currSel_orig_position;
        var loaded = false;
        var orig_position;
        calendarGen(currMonth, currYear);


        function calDateAllBtnGen(month, day, year) {
            var monthday = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'][month] + ' ' + day;
            $('#calDateAllBtn').html("Showing events from " + monthday + ".<br />Click for more.");
            var lnk = "http://weekly.citypaper.com/Events/Date/" + (month + 1) + "/" + day + "/" + year;
            $('#calDateAllBtn').attr("href", lnk);
        }

        function calendarGen(month, year) {
            var cal = new Calendar(month, year, offset);
            cal.generateHTML();
            $('#calendar').html(cal.getHTML());

            if (!loaded) {
                var currDay = currDate.getDate();
                currentSelection = $('td.calendar-day.currentmonth a.day' + currDay);
                currSel_orig_position = currentSelection.css('background-position');
                currentSelection.css('background-position', -((currDay - 1) * offset) + 'px ' + activeOffset + 'px').data('selected', true);
                $('#cal-selection span').html(currDay);
                calDateAllBtnGen(month, currDay, year)
                loaded = true;
            }

            $('td.calendar-day a').not(currentSelection).data('selected', false);
        }

        // hover effect for days
        $('td.calendar-day a').live("mouseover",
		function() {
		    //orig_position = $(this).css('background-position');
		    var day = $(this).attr('class').replace(/[^0-9]/g, '') - 1;
		    orig_position = -(day * offset)
				+ 'px '
				+ (($(this).parent('td').hasClass('nextprevmonth')) ? otherMonthOffset : 0)
				+ 'px';

		    $(this).css('background-position', -(day * offset) + 'px ' + activeOffset + 'px');
		});
        $('td.calendar-day a').live("mouseout",
		function() {
		    if (!$(this).data('selected'))
		        $(this).css('background-position', orig_position);
		});

        // day click handler
        $('td.calendar-day a').live("click",
		function() {
		    currentSelection.data('selected', false).css('background-position', currSel_orig_position); // reset former selection to its initial state

		    currentSelection = $(this).data('selected', true);
		    var day = currentSelection.attr('class').replace(/[^0-9]/g, '');
		    currSel_orig_position = -((parseInt(day, 10) - 1) * offset)
				+ 'px '
				+ ((currentSelection.parent('td').hasClass('nextprevmonth')) ? otherMonthOffset : 0)
				+ 'px';

		    $('#cal-selection span').html(day);
		    calDateAllBtnGen(currMonth, day, currYear);
		    selDay = day;
		    selYear = currYear;
		    selMonth = currMonth;
		    var parentTd = currentSelection.parent('td');
		    if (parentTd.hasClass('prevMonth')) {
		        selMonth--;
		        if (selMonth < 0) {
		            selMonth = 11;
		            selYear--;
		        }

		        //added by bb 03/16/2011
		        currMonth--;
		        if (currMonth < 0) {
		            currMonth = 11;
		            currYear--;
		        }
		        calendarGen(currMonth, currYear);
		        if (currMonth === selMonth && currYear === selYear) {
		            $('td.currentmonth a.day' + selDay).click().mouseover();
		        }
		        //////////////////////////
		    } else if (parentTd.hasClass('nextMonth')) {
		        selMonth++;
		        if (selMonth > 11) {
		            selMonth = 0;
		            selYear++;
		        }
		        //added by bb 03/16/2011
		        currMonth++;
		        if (currMonth > 11) {
		            currMonth = 0;
		            currYear++;
		        }
		        calendarGen(currMonth, currYear);
		        if (currMonth === selMonth && currYear === selYear) {
		            $('td.currentmonth a.day' + selDay).click().mouseover();
		        }
		        ///////////////////////
		    }
		    // update the result table
		    getCalWidgetResults(selYear, selMonth, selDay);
		    return false;
		});

        // previous month click handler
        $('#prevMonthArrow, #prevMonthLink').live("click", function() {
            currMonth--;
            if (currMonth < 0) {
                currMonth = 11;
                currYear--;
            }
            calendarGen(currMonth, currYear);
            if (currMonth === selMonth && currYear === selYear) {
                $('td.currentmonth a.day' + selDay).click().mouseover();
            }
            return false;
        });

        // next month click handler
        $('#nextMonthArrow, #nextMonthLink').live("click", function() {
            currMonth++;
            if (currMonth > 11) {
                currMonth = 0;
                currYear++;
            }
            calendarGen(currMonth, currYear);
            if (currMonth === selMonth && currYear === selYear) {
                $('td.currentmonth a.day' + selDay).click().mouseover();
            }
            return false;
        });
    });

    var currDate = new Date();
    var cal_months_labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function Calendar(month, year, offset) {
        this.month = (isNaN(month) || month === null) ? currDate.getMonth() : month;
        this.year = (isNaN(year) || year === null) ? currDate.getFullYear() : year;
        this.html = '';
        this.offset = offset;
    }
    Calendar.prototype.generateHTML = function() {
        var firstDay = new Date(this.year, this.month, 1);
        var startingDay = firstDay.getDay(); // day of week of first day of month
        var monthLength = daysInMonth(this.year, this.month);
        var day = nextprev_day = nextmonth_day = 1;

        var prevmonth = (this.month - 1 < 0) ? 11 : (this.month - 1);
        var prevmonth_numdays = daysInMonth(this.year, prevmonth);
        var nextmonth = (this.month + 1 > 11) ? 0 : (this.month + 1);

        var monthName = cal_months_labels[this.month];
        var prevMonthName = cal_months_labels[prevmonth];
        var nextMonthName = cal_months_labels[nextmonth];
        var nextPrevClass = "prevMonth";

        var html = new Array();
        html.push('<table class="calendar-table"><tr>');
        html.push('<th colspan="7"><a id="prevMonthArrow" class="arrow">&#9664;</a> ');
        html.push('<a id="prevMonthLink">' + prevMonthName + '</a> <span class="divider">|</span> ');
        html.push('<a id="currMonthLink">' + monthName + '</a> <span class="divider">|</span> ');
        html.push('<a id="nextMonthLink">' + nextMonthName + '</a> <a id="nextMonthArrow" class="arrow">&#9654;</a></th></tr><tr>');
        for (var i = 0; i < 9; i++) { // rows (weeks)
            for (var j = 0; j <= 6; j++) { // cells (days)
                if (day <= monthLength && (i > 0 || j >= startingDay)) {
                    html.push('<td class="calendar-day currentmonth">');
                    html.push('<a href="#" class="day' + day + '" style="background-position: -' + (this.offset * (day - 1)) + 'px 0"></a>');
                    day++;
                } else {
                    if (i === 0 && j < startingDay) { // previous month
                        nextprev_day = prevmonth_numdays - (startingDay - j) + 1;
                    } else {
                        nextprev_day = nextmonth_day++;
                        nextPrevClass = "nextMonth";
                    }
                    html.push('<td class="calendar-day nextprevmonth ' + nextPrevClass + '">');
                    html.push('<a href="#" class="day' + nextprev_day + '" style="background-position: -' + (this.offset * (nextprev_day - 1)) + 'px ' + -this.offset + 'px"></a>');
                }
                html.push('</td>');
            } // days
            // stop making rows if we've run out of days
            if (day > monthLength) {
                break;
            } else {
                html.push('</tr><tr>');
            }
        } // weeks

        html.push('</tr></table>');

        this.html = html.join('');
    };

    Calendar.prototype.getHTML = function() {
        return this.html;
    };

    function daysInMonth(year, month) {
        return 32 - new Date(year, month, 32).getDate();
    }

    var getCalWidgetResults = function(selYear, selMonth, selDay) {


        userOptions["ucItemStartDate"] = selYear + '-' + (selMonth + 1) + '-' + selDay;
        userOptions["ucItemEndDate"] = userOptions["ucItemStartDate"];

        makeRequestStr();
        jQuery.ajax({
            url: siteAddr + 'userControls/CalendarMain/results.aspx?' + requestStr,
            dataType: "jsonp",
            jsonpCallbackString: "resultCBFN",
            success: function(data) {
                jQuery("#pp1").html(data);
            }
        });
    };

})();

var resultCBFN = function(data) {    
    jQuery("#pp1").html(data);
};