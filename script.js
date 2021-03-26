// add on click to all save buttons - it needs to be dynamic - we need to be able to use one piece of code that works for all buttons
//the button will add the value of the textarea (its sibling) to local storage with its parent the divs id a s an identifier
$(".saveBtn").on("click", function(){
    var diaryEntry = $(this).siblings(".description").val();
    var diaryEntryTime = $(this).parent().attr('id');

    localStorage.setItem(diaryEntryTime, diaryEntry)
})
// we need to use moment.js to display the current time on the screen

//on page load we also want to check local storage for any previously saved values
var eightActivity = localStorage.getItem('8');
$("#8 .description").val(eightActivity); 

var nineActivity = localStorage.getItem('9');
$("#9 .description").val(nineActivity); 

var tenActivity = localStorage.getItem('10');
$("#10 .description").val(tenActivity); 

var elevenActivity = localStorage.getItem('11');
$("#11 .description").val(elevenActivity); 

var twelveActivity = localStorage.getItem('12');
$("#12 .description").val(twelveActivity); 

var thirteenActivity = localStorage.getItem('13');
$("#13 .description").val(thirteenActivity); 

var fourteenActivity = localStorage.getItem('14');
$("#14 .description").val(fourteenActivity); 

var fifteenActivity = localStorage.getItem('15');
$("#15 .description").val(fifteenActivity); 

var sixteenActivity = localStorage.getItem('16');
$("#16 .description").val(sixteenActivity); 

var seventeenActivity = localStorage.getItem('17');
$("#17 .description").val(seventeenActivity); 