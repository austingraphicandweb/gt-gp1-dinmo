/**
 * Project one programming script
 */
// Global variables
// Function definitions
$(document).ready(function () {

  // food api
  function getRecipe() {
    $("#dinner-recipe").attr("style", "display: none");
    $("#movie-recs").attr("style", "display:block");
    var keyword = $("#protein").val();
    var veggie = $("#veggie").val();
    var healthLabels = $("#diet").val();
    var keyword;
    var veggie;
    var healthLabels;
    var queryUrl = 'https://api.edamam.com/search?q=' + keyword + '&app_id=3e501918&app_key=c95225452f4fe51bc9df3f954ead7e29&ingredients=' + veggie + '&healthLabels=' + healthLabels; //api goes here
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function (response) {
       console.log(response);
    })
  }

  //movie api
  //below is queryURL0 so which is concaonated with variables so that when the user selects their choices on the web page they are plugged into queryurl0 when the request is processed.

  // var queryUrl = "https://www.omdbapi.com/?t=" + movie + genre + company +"&apikey=trilogy";

  // var movieParameters;


  function getMovie() {
    var movie = $("#movie-input").val().split(" ");
    var genre = $("#genre").val();
    // need an id for var company below 
    // var company = $().val();
    var movie;
    var genre;
    var company;
    // need to update 
    var movieQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&apikey=d197feef";
  

    $.ajax({
      url: movieQueryUrl,
      method: "GET"
    }).then(function (response) {
      console.log("this function works!");
      console.log(movieQueryUrl);


    })

  }
  

  //Function Definitions
  //function calls 
  //Created getStarted function
  function getStarted() {
    $("#main-page").attr("style", "display: none");
    $("#dinner-recipe").attr("style", "display:block");


  }


  //EVENT LISTENERS

  //Create getStarted button event listener
  $("#get-started").on("click", function () {
    getStarted();


  });

  //Create getRecipe button event listener
  $("#recipeBtn").on("click", function () {
    getRecipe();
  })

  //Create getMovie button event listener
  $("#movieBtn").on("click", function () {
    getMovie();
  })
})

 // function callers
 // event listeners
  // this for loop can be used with a click event so when someone submits their choices they get a randomized result based off of their preferences


  // this for loop can be used with a click event so when someone submits their choices they get a randomized result based off of their preferences
// var movies = 0 ; //variable that targets the AJAX request  with a list of movies inside of an object array
// for(i=0;i<movies.length;i++)
// var random = Math.floor(Math.random().length)