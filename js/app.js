//JS file

//---GLOBAL VARIABLES---//

// assings the number of students to numberOfStudents variable
var numberOfStudents = $(".student-item.cf").length;

// append student search field to header
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');

$(".page-header").append('<div class="noStudentFound"><p>No students found! </p></div>');
$(".noStudentFound").hide();

// append pagination class and unordered list to end of body
$("body").append('<div class="pagination"><ul></ul></div>');

paginateFunction();

function paginateFunction(){
$(".student-item.cf:gt(9)").hide(); //shows only ten students

  $(".pagination li").each(function(){ //clear pagination
    $(this).remove();
  })

  var pageNum = 1; //resets pageNum to 1 before entering loop
  //if(numberOfStudents >= 11){
      //$(".pagination ul").append('<li><a href="#">' + pageNum + '</a></li>');
      //pageNum += 1
      for(i = 10; i <= Math.ceil(numberOfStudents); i += 10){
      $(".pagination ul").append('<li><a href="#">' + pageNum + '</a></li>');
      pageNum += 1;
  }
$(".pagination a").first().addClass("active");
console.log("PAGINATION FUNCTION run");
console.log("PageNum: " + pageNum);
}




//var currentPage = 1;
$(".pagination").on("click", "a", pageClickFunction);

function pageClickFunction() {

  console.log("Number of students to show: " + $(".student-item.cf").length);

    $("a").removeClass("active");
    $(this).addClass("active");

    var currentPage = parseInt($(this).text()); //gets the current page and converts it to an integer
    var startSlice = currentPage * 10;
    var endSlice = (currentPage) * 10 + 10;
    if(currentPage === 1){
      startSlice = currentPage - 1;
      endSlice = currentPage + 9;
    }
    console.log("startSlice is equal to: " + startSlice);
    console.log("endSlice is equal to: " + endSlice);
    $(".student-item").hide();
    $(".student-item.cf").slice(startSlice,endSlice).show();
}


$(".student-search input").keyup(function(){

    var $search = $(".student-search input").val().trim().toLowerCase();

        $(".student-item h3, .student-item .email").each(function(){

            if ($.trim($(this).text()).search(new RegExp($search, "i")) < 0) { //need to remove white space between first and last name!!!
                  $(this).closest(".student-item").removeClass("cf").hide(); //$(this).closest(".student-item").hide() //move up the DOM tree from h3 to .student-item class
            } else {
                  $(this).closest(".student-item").addClass("cf").show(); //$(this).closest(".student-item").show(); //move up the DOM tree from h3 to .student-item class
              }
        })

  numberOfStudents = $(".student-item.cf").length;

  if(numberOfStudents === 0){
    $(".noStudentFound").show();
  } else {
    $(".noStudentFound").hide();
  }
  //console.log("The number of displible students are :" + numberOfStudents);
  paginateFunction();
})
