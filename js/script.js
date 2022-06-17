//text change

function textChange(){
	document.getElementById("h2").innerHTML = "This is my first JavaScript."
}

function textChange2(){
	document.getElementById("name").innerHTML = "My name is MD RUBEL HOSSAIN."
}

function textChange3(){
	document.getElementById("demo").innerHTML = "Do you want to know today's time and date?"
}

window.alert('Welcome');

function msg(){  
    alert("Hello JavaScript");  
}

document.getElementById("number").innerHTML = 5 + 6;


var x = 5;
var y = 6;
var z = x + y;
document.getElementById("Math").innerHTML =
"The value of z is: " + z;

var x = 110;
x += 25;
document.getElementById("+operatpr").innerHTML = x;


var x = 100;
x -= 50;
document.getElementById("-operator").innerHTML = x;


var x = 50;
var z = x **2;
document.getElementById("multiplication").innerHTML = z;


document.getElementById("Math_round").innerHTML = Math.round(49.51);


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("day").innerHTML = "Today is " + day;





/*jquery start*/

/*
$(document).ready(function(){

  $('button').click(function(){
    alert("Hello jquery")
  });



});
*/


$(document).ready(function(){


  $('#hide').click(function(){
    $('h5').hide(2000);
  });
  $('#show').click(function(){
    $('h5').show(2000);
  });
  $('#toggle').click(function(){
    $('h5').toggle(2000);
  });



  $('.panel').click(function(){
    $('.content').slideToggle(2000);
  });




  $( ".c_div" ).css( "border", "2px solid red" )
  .add( ".p22" )
  .css( "background", "green" );




  $( ".div33.left, .div33 .right" ).find( " .div33 .div33 > .p33" ).addClass( "border" );
 
  // First Example
  $( ".div33.before-addback" ).find( ".p33" ).addClass( "background" );
   
  // Second Example
  $( ".div33.after-addback" ).find( ".p33" ).addBack().addClass( "background" );



  $( ".p44" ).last().addClass( [ "selected", "highlight" ] );




  
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").delay("slow").fadeIn();
    $("#div2").delay("fast").fadeIn();
    $("#div3").delay(800).fadeIn();
    $("#div4").delay(2000).fadeIn();
    $("#div5").delay(3000).fadeIn();
    $("#div6").delay(3000).fadeIn();
  });
});




$(document).ready(function(){
  $(document).mousemove(function(event){ 
    $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
  });
});




$(document).ready(function(){
  $(".p333").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
});




var x = 0;
$(document).ready(function(){
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });
});




$(document).ready(function(){
  $("form").submit(function(){
    alert("Submitted");
  });
});




$(document).ready(function(){
  $("input").select(function(){
    $("input").after(" Text marked!");
  });
  $(".button_c").click(function(){
    $("input").trigger("select");
  });
});




$(document).ready(function(){
  $(".p55").bind("click", function(){
    alert("The paragraph was clicked.");
  });
});



});

