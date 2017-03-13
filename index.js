$(document).ready(function(){

    $("#addButton").click(function(event){

      //debugger;
      var nameVal = $('#inputName').val();
      if (nameVal !== ""){
          event.preventDefault();
          var value = $('#inputName').val() + "\t" + $('#inputAge').val();
          $("table").append("<tr><td>"+$('#inputName').val()+"</td><td>"
          +$('#inputAge').val()+"</td></tr>");
          $("#inputName").val("");
          $("#inputAge").val("");
        }
    });


    $("#clearButton").click(function(event){
      event.preventDefault();
      $("td").empty();
    });
});
