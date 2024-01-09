// Allows user to edit event for each hour of day
// Uses JQuery
// Using Day.js to work with date & time
// current day at the top of calendar when user opens calendar
// present time blocked out for standard business hours
// Color Code each time block based on past, present and future
// Allow user to enter event when they click on time block
// Save event in local storage when the save button is clicked


// Current Day

const today = dayjs().format("dddd[,] MMMM D[th]");
$("#currentDay").text(today);


// Colour change for past, present, future

function ColorBlock() {
    const hour = dayjs().hour();

    const timeBlocks = $(".time-block");

    for (var i = 0; i < timeBlocks.length; i++) {
    const present = parseInt($(timeBlocks[i]).attr("id"));

        if (present > hour) {
            $(timeBlocks[i]).addClass("future");
        } else if (present === hour) {
            $(timeBlocks[i]).addClass("present");
        } else {
            $(timeBlocks[i]).addClass("past");
        }
}
}

ColorBlock();

