// Dependencies
var bannerDate = $('#currentDay');
var timeblocks = $('.timeblock');
var hourSchedule = $('#schedule');
var eventBox = $('.eventbox');
var saveButton = $('.saveBtn');


// Data
var currentDate = moment();
var currentHour = moment().hour();

// Functions
bannerDate.text(currentDate.format('LL'));

// check if time is past present or future
function testTime (){
    hourSchedule.children().each(function() {
        // with schedule starting at 9AM, index +9 will return the value of the timeslot for comparison with current hour
        if (($(this).index()+9) < currentHour) {
            $(this).children().eq(1).addClass('past');
        } else if(($(this).index()+9) === currentHour) {
            $(this).children().eq(1).addClass('present');
        } else {
            $(this).children().eq(1).addClass('future')
        }
    })
}

testTime()

var timeslot = function (){
    $(this).parent().index()+9
}

timeblocks.each(function(){
    $(this).on('click','.saveBtn', function(){
        var textbox = $(this).siblings().eq(1)
        localStorage.setItem(textbox.attr('id'), textbox.text())
    })
})


console.log(eventBox.text())

// User Experience
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // Moment library tool
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // check event date against current time
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
    // save in local storage
// THEN the saved events persist