// Dependencies
var bannerDate = $('#currentDay');
var timeblocks = $('.timeblock');
var hourSchedule = $('#schedule');
var eventBox = $('.eventbox');
var saveButton = $('.saveBtn');


// Data
var currentDate = moment();
var currentHour = moment().hour();
// var currentInstant = setInterval(moment(), 1000)

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
// run function
testTime()

// use ID as key, text input as value, save to local storage on save button click
timeblocks.each(function(){
    $(this).on('click','.saveBtn', function(){
        var textbox = $(this).siblings().eq(1)
        localStorage.setItem(textbox.attr('id'), textbox.text())
    })
})

// retrieve previously saved items
eventBox.each(function(){
    $(this).text(localStorage.getItem($(this).attr('id')))
})