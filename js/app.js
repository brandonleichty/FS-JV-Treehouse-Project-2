//JS file

//---GLOBAL VARIABLES---//

// assings the number of students to numberOfStudents variable
var numberOfStudents = $(".student-item.cf").length;

// append student search field to header
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');

// display only the first ten students *is "display: none" better?*
$(".student-item.cf:nth-of-type(n+11)").hide();


// append pagination class and unordered list to end of body
$("body").append('<div class="pagination"><ul></ul></div>');

var pageNum = 1;
for(i = 10; i < numberOfStudents; i += 10){
  $(".pagination").append('<li><a href="#">' + pageNum + '</a></li>');
  pageNum += 1;
}
var currentPage = 1;
// set the first page/link to active
$(".pagination a").first().addClass("active");

$(".pagination a").click(function(){
    $("a").removeClass("active");
    $(this).addClass("active");
    currentPage = parseInt($(this).text()); //gets the current page and converts it to an integer
    var startSlice = currentPage * 10;
    var endSlice = (currentPage) * 10 + 10;
    if(currentPage === 1){
      startSlice = currentPage - 1;
      endSlice = currentPage + 9;
    }
    //console.log("startSlice is equal to: " + startSlice);
    //console.log("endSlice is equal to: " + endSlice);
    $(".student-item").hide();
    $(".student-item.cf").slice(startSlice,endSlice).show(); //figure out a way to show ten items at a time based upon button pressed
})


$(".student-search input").keyup(function(){
    var $search = $(".student-search input").val().toLowerCase();
    //console.log("This worked");
    //console.log($search);

    var $studentName = $(".student-item h3").text().toLowerCase();

        $(".student-item h3").each(function(){

            if ($(this).text().search(new RegExp($search, "i")) < 0) {

                $(this).closest("li").fadeOut();

            } else {
              $(this).show();
              $(this).closest("li").fadeIn();
              }
  })
})
