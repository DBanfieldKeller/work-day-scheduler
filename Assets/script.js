// Dependencies
var bannerDate = $('#currentDay');
var currentDate = moment();

// Data

// Functions
bannerDate.text(currentDate.format('LL'));



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