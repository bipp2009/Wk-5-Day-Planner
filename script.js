$(".saveBtn").on("click", function () {
  var diaryEntry = $(this).siblings(".description").val();
  var diaryEntryTime = $(this).parent().attr("id");
  localStorage.setItem(diaryEntryTime, diaryEntry);
});

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY");
  var timeDisplayEl = $("#currentDay");
  timeDisplayEl.text(rightNow);

  $(".time-block").each(function () {
    var activityHour = $(this).attr("id");
    var currentHour = moment().hours();

    if (activityHour < currentHour) {
      $(this).addClass("past");
    } else if (activityHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

var eightActivity = localStorage.getItem("8");
$("#8 .description").val(eightActivity);

var nineActivity = localStorage.getItem("9");
$("#9 .description").val(nineActivity);

var tenActivity = localStorage.getItem("10");
$("#10 .description").val(tenActivity);

var elevenActivity = localStorage.getItem("11");
$("#11 .description").val(elevenActivity);

var twelveActivity = localStorage.getItem("12");
$("#12 .description").val(twelveActivity);

var thirteenActivity = localStorage.getItem("13");
$("#13 .description").val(thirteenActivity);

var fourteenActivity = localStorage.getItem("14");
$("#14 .description").val(fourteenActivity);

var fifteenActivity = localStorage.getItem("15");
$("#15 .description").val(fifteenActivity);

var sixteenActivity = localStorage.getItem("16");
$("#16 .description").val(sixteenActivity);

var seventeenActivity = localStorage.getItem("17");
$("#17 .description").val(seventeenActivity);

displayTime();
