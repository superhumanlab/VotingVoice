$.support.cors = true;
$(function () {
      $("#searchInputBox").autocomplete({
              source: function (request, response) {
                  $.ajax({
                  //  <!-- STEP : Change value to agy site collection name -->
                      url: "http://search.maryland.gov/suggest?site=Statewide&client=search_md_1&access=p&format=rich&q=" + request.term,
                      dataType: "jsonp",
                      data: {
                          name_startsWith: request.term
                      },
                      search: function () {
                          // custom minLength
                          var term = extractLast(this.value);
						 
                          if (term.length < 1) {
                              return false;
							  
                          }
                      },
                      success: function (data) {
                          response($.map(data.results, function (item) {
                              return {
                                  label: item.name,
                                  value: item.name
                              }
                          }));
                      }
                  });
              },
              minLength: 2,
          });
      });