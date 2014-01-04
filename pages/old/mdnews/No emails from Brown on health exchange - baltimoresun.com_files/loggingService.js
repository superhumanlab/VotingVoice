(function initializeLoggingService() {
  'use strict';
  
  window.trb = typeof window.trb == 'object' && window.trb || {};

  // data = parameter name / value mapping object
  // id = e.g. e949eb98-f19d-472c-92cd-ee7620ad47c7
  window.trb.loggingService = function loggingService(data, options) {
    
    if (!data) return;
    
    var cookieName = 'tribanalyticscookie',
        cookieData = readCookie(cookieName),
        id = options && options.id,
        url = options && options.url,
        key = options && options.key,
        query;
    
    if (!id) {
      id = 'e949eb98-f19d-472c-92cd-ee7620ad47c7';
    }
    
    if (!url) {
      url = 'http://loggingservices.tribune.com';
    }
    
    if (!key)  {
    	key = 'viewcontent';
    }
        
    url += '/profiles/' + id;
    
    if (!data.url) {
      data.url = window.location.href;
    }

    if (!cookieData) {
      cookieData = guidGenerator();
      createCookie(cookieName, cookieData);
    }
    
    query = 'async=1&k=' + key + '&' + queryString({
      v: data.cid ? data.cid : data.url,
      u: queryString({
        u: cookieData,
        es: data.es
      }),
      c: queryString(data, {es:1, cid:1}) + (data.ct ? '' : (data.cid ? '&ct=p2p' : '&ct=web'))
    })

    jQuery.ajax({
      url: url,
      data: query,
      dataType: 'script'
    });
  };
  
  function guidGenerator() {
    function s() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return s()+s()+'-'+s()+'-'+s()+'-'+s()+'-'+s()+s()+s();
  }
  
  function readCookie(name) {
    var nameEQ = name + '=',
        ca = document.cookie.split(';'),
        i = -1,
        index,
        c;
    while ((c = ca[++i])) {
      if ((index = c.indexOf(nameEQ)) > -1) {
        return c.substring(index + nameEQ.length, c.length);
      }
    }
  }
  
  function createCookie(name, value) {
    var date = new Date;
    date.setTime(date.getTime() + 315360000000); // 10 years
    document.cookie = name + "=" + value + '; expires=' + date.toGMTString() + "; path=/";
  }
  
  function queryString(data, ignoredKeys) {
    var query = '',
        key;
    if (data) for (key in data) data.hasOwnProperty(key) && (!ignoredKeys || ignoredKeys && !ignoredKeys[key]) && data[key] && (query += (query ? '&' : '') + key + '=' + encodeURIComponent(data[key]));
    return query;
  }
})();