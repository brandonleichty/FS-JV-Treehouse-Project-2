//Pagination on page load:
paginateFunction();


//---GLOBAL VARIABLES---//

// assings the number of students to numberOfStudents variable
var numberOfStudents = $(".student-item.cf").length;

var studentDetailsString = [];



//---PAGE APPENDS ON LOAD---//

// append student search field to header
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');

// append "No students found!" paragraph and emmidately hide (will be shown if there are no matching search results)
$(".page-header").append('<div class="noStudentFound"><p>No students found! </p></div>');
$(".noStudentFound").hide();

// append pagination class and unordered list to end of body
$("body").append('<div class="pagination"><ul></ul></div>');



//---FUNCTIONS---//

function paginateFunction(){
    console.log("paginateFunction!!!");

    $(".student-item.cf:gt(9)").hide(); //shows only ten students

    //clear pagination
    $(".pagination li").each(function(){
          $(this).remove();
      });

      var pageNum = 1; //resets pageNum to 1 before entering loop

      //adds pagination based upon number of students to show
      if (numberOfStudents > 10) { //doesn't display pagination if there aren't enough students
      for(i = 10; i <= (Math.ceil(numberOfStudents / 10)) * 10; i += 10){
            $(".pagination ul").append('<li><a href="#">' + pageNum + '</a></li>');
            pageNum += 1;
        }
      }
      //sets page 1 to the active page
     $(".pagination a").first().addClass("active");
}



//moves between each page showing the proper students upon each page click
function pageClickFunction() {

    $("a").removeClass("active");
    $(this).addClass("active");

    var currentPage = parseInt($(this).text()); //gets the current page and converts it to an integer
    var startSlice = (currentPage * 10) - 10;
    var endSlice = (currentPage * 10);

    $(".student-item").hide();
    $(".student-item.cf").slice(startSlice,endSlice).show();
}



// searches students by getting input from the user and comparing each character to the text inside of "student-detials." Adds/removes students from "numberOfStudents" as need be.
function searchFunction(){

    var $search = $(".student-search input").val().trim().toLowerCase().replace(/ /g,''); // gets user input from from search field, trims each end, changes to lowercaes, and removes spaces
    $(".student-details").each(function(){ // loops through each student
    studentDetailsString = $(this).text().trim().toLowerCase().replace(/ /g,'');

        //if there are no matching characters for each input, the CF class is removed from each "student-item" class. Only students with the class CF are displayed
        if (studentDetailsString.search(new RegExp($search, "i")) < 0) {
                $(this).closest(".student-item").removeClass("cf").hide();
            } else {
                $(this).closest(".student-item").addClass("cf").show();

              }
        });

  numberOfStudents = $(".student-item.cf").length; //number of students with the CF class

  // checks to see if there are no search matches - dispalys "No students found!" if there are no results
  if(numberOfStudents === 0){
    $(".noStudentFound").show();
  } else {
    $(".noStudentFound").hide();
  }
  // re-paginate with new search results after each keyup
  paginateFunction();
}

//---EVENT LISTENERS---//

$(".pagination").on("click", "a", pageClickFunction); //switches between pages when each pagination link is clicked
$('.page-header').find('button').on('click', searchFunction); //doesn't actually do anything because of the live search
$(".student-search input").keyup(searchFunction); //calls "searchFunction" on each keyup
