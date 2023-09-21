function getDayOfTheWeek(year, month, day) {
    let step1 = Math.trunc((year % 100) / 12); // 7
    let step2 = (year % 100) % 12; // 5
    let step3 = Math.trunc(step2 / 4); 
    let step4 = day; // ignore it
    // Maybe use if statement or something
    let step5 = null;
    if (month == "January") {
        step5 = 1;
    } else if (month == "February") {
        step5 = 4;
    } else if (month == "March") {
        step5 = 4;
    } else if (month == "April") {
        step5 = 0;
    } else if (month == "May") {
        step5 = 2;
    } else if (month == "June") {
        step5 = 5;
    } else if (month == "July") {
        step5 = 0;
    } else if (month == "August") {
        step5 = 3;
    } else if (month == "September") {
        step5 = 6;
    } else if (month == "October") {
        step5 = 1;
    } else if (month == "November") {
        step5 = 4;
    } else if (month == "December") {
        step5 = 6;
    }
    let step6 = (step1 + step2 + step3 + step4 + step5) % 7;
    if (step6 == 0) {
        step6 == "Saturday";
    } else if (step6 == 1) {
        step6 == "Sunday";
    } else if (step6 == 2) {
        step6 == "Monday";
    } else if (step6 == 3) {
        step6 == "Tuesday";
    } else if (step6 == 4) {
        step6 == "Wednesday";
    } else if (step6 == 5) {
        step6 == "Thursday";
    } else if (step6 == 6) {
        step6 == "Friday";
    }
    //let step6 = (year % 100) % 12; // 5
    console.log(`${month}-${day}-${year},${step6}`); // 1
}

function makeCalendar(year, month, day) {
    for(let outer = 1; outer <= 12; outer++) {
            for (let i = 1; i <= 31; i++) {
                getDayOfTheWeek(year, outer, i);
                if (outer == 2) {
                    i <= 28;
                } else if (outer == 4) {
                    i <=30;
                } else if (outer == 6) {
                    i <=30;
                } else if (outer == 9) {
                    i <=30;
                } else if (outer == 11) {
                    i <=30;
                }
            console.log(`${month}-${day}-${year}`);
            }
        }
}

module.exports = { getDayOfTheWeek, makeCalendar }; 