$(".buttonclick").on("click", function() {

// var userInput = $("#getmovieid").val();
// var getDbLink = $("#databaselink").val();

// console.log(userInput);
// console.log(getDbLink);

      $.ajax({
        // url:"http://www.omdbapi.com/?i=" + userInput,
        //method: "getmovieid"
        url: "http://api.brewerydb.com/v2/?key=124796ba126c92f04f87e154a597c112"
      }).done(function(data){
        // console.log("done fired");
        // console.log(data);

        // data.poster = "http://img.omdbapi.com/?i=" + data.imdbID + "&apikey=8513e0a1";
        // console.log("done");
        // $.ajax({
        //   url: getDbLink,
        //   method: "POST",
        //   data: JSON.stringify(data)
        console.log(data);
        });


}); 
 