/* ajax-demo.js
    JavaScript file for our AJAX demo
*/

// URL for simple AJAX request/response demo
// https://courses.washington.edu/info343/ajax/test.php

// URL for "top 1000 songs to hear before you die" dataset on Socrata
// https://opendata.socrata.com/resource/ed74-c6ni.json

// URL for real-time Fire 911 calls in Seattle
// http://data.seattle.gov/resource/kzjm-xkqj.json

// other public datasets available via Socrata:
// https://opendata.socrata.com/    (general)
// https://data.seattle.gov/        (Seattle specific)








//htmlEncode()
// encodes the passed string of HTML so that it can
// be safely added to a page without being interpreted
// as HTML markup (with potentially harmful effects)
// source: http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery
// parameters:
//  - s (string) value to html-encode
//  - return value (string) encoded HTML value
//
function htmlEncode(s) {
    //create an in-memory div element
    var div = document.createElement('div');
    //append the string to encode as a text node
    div.appendChild(document.createTextNode(s));
    //return the innerHTML property (which will be encoded)
    return div.innerHTML;
} //htmlEncode()