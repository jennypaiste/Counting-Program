$("#button1").on("click", function(){
  var userInput=$("#names").val();
    if(userInput){
      alert("Hello "+ (userInput)+"!");
  }
    if(userInput===''){
      alert("Please enter a name!");
  }

  $("#results").html(userInput);

});

$("#button2").on("click", function(){
  var number= $("#numbers").val();
    if(number<0 || number>100){
      alert("Please enter a number between 1-100");
  }
    else if(isNaN(number)){
      alert("Please enter only numbers");
  }
    else{
      alert ("You have entered " + number);
    for(i=1;i<=number;i+=1){
      
      $("#results").append(i+"<br>");
    }
  }
})
