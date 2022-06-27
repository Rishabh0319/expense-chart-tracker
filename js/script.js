/* *********** All usefull variables and import ************ */
import data from "./data.js";

const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date();
const bars = document.querySelectorAll('.bar-container .bars');
const hoverInfo = document.querySelectorAll('.hover-info');


/* *********** get the todays current day ************ */

function getDay() {
    let day = weekday[date.getDay()];
    return day;
}

/* *********** fill specific color in current day bar ************ */

function colorCurrentDaybar() {
    bars.forEach((bar) => {
        if (bar.getAttribute('name') == getDay()) {
            bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
        }
        else
        {
            bar.style.backgroundColor = "hsl(10, 79%, 65%)";
        }
        
    })
}

/* *********** Load amount value on Hover Element ************ */

hoverInfo.forEach((element,index)=>{
    element.innerHTML = `${'$'+data[index].amount}`;
});


/* *********** rays all bars according to data in percentage(%) ************ */

function raysTheBars() {
    bars.forEach((bar, index) => {
        if (bar.getAttribute('name') == data[index].day) {
            bar.style.height = `${data[index].amount}%`;
        }
        // console.log("day:" + data[index].day + " " + "amount:" + data[index].amount);
    })
}

/* *********** hover and color effects in bars ************ */

bars.forEach((bar, index) => {
    bar.addEventListener('mouseover', () => {
        let getBarCurrentColor = window.getComputedStyle(bar).backgroundColor;
        

        if (getBarCurrentColor === 'rgb(118, 181, 188)') {
            bar.style.backgroundColor = '#B4DFE5';
            hoverInfo[index].style.display = 'block';
        }
        else {
            bar.style.backgroundColor = '#FF9B87';
            hoverInfo[index].style.display = 'block';
        }

    });


    bar.addEventListener('mouseout', () => {
        colorCurrentDaybar();
        hoverInfo[index].style.display = 'none';
    })

});


/* *********** function calling ************ */
 
colorCurrentDaybar();
raysTheBars();



