  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','egov');

  egov('create', 'UA-31247043-4', 'none');
  egov('send', 'pageview');

function showStatewideNavigation(color) {
    // verify color is passed in 
    if (color)
        color = color.toLowerCase();
    else
        color = "white";

    // limit color selections
    switch (color) {
        case "black":
            color = "#000000";
            break;
        case "white":
            color = "#FFFFFF";
            //color = "#FEEDB9";
            break;
        default:
            color = "#FFFFFF";
            break;
    }

    var nav;
    nav = '<div style="font-family: arial,verdana,helvetica,sans-serif; font-size: xx-small; padding: 5px 10px 0px 0px; color: ' + color + '">';
    nav += '<a class="hidden-phone" "href="http://www.maryland.gov" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 0px; color: ' + color + ';">Maryland.gov</a>';
    nav += '<a href="http://www.doit.state.md.us/phonebook/" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">Phone Directory</a>';
    nav += '<a href="http://www.maryland.gov/pages/agency_directory.aspx" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">State Agencies</a>';
    nav += '<a class="hidden-phone" href="http://www.maryland.gov/pages/online_services.aspx" target="_blank" style="text-decoration: none; padding: 0px 0px 0px 5px; color: ' + color + ';">Online Services</a>';
    nav += '</div>';
    return nav;
}
