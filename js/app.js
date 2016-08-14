//JS file

//---GLOBAL VARIABLES---//

// search field variable to append to html
var $studentSearch = $('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');


// append student search field to header
$(".page-header").append($studentSearch);

// display only the first ten students
$(".student-item.cf:nth-of-type(n+11)").hide();






/*
{
    display: none;
}
*/
