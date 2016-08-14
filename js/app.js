//JS file

//---GLOBAL VARIABLES---//

// assings the number of students to numberOfStudents variable
var numberOfStudents = $(".student-item").length;

// append student search field to header
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');

// display only the first ten students *is "display: none" better?*
$(".student-item.cf:nth-of-type(n+11)").hide();


// append pagination class and unordered list to end of body
$("body").append('<div class="pagination"><ul></ul></div>');

var pageNum = 1;
for(i = 0; i < numberOfStudents; i += 10){
  $(".pagination").append('<li><a href="#">' + pageNum + '</a></li>');
  pageNum += 1;
}
