/*
 * Clock
 */
const ACTIVE_CLASS_NAME = "active";
const clockWrapperDOM = document.querySelector(".js-clock-wrapper");
const clockDOM = document.querySelector(".js-clock");

const showTime = () => {
  const date = new Date();
  const time = `${
    getDateName('month',date.getMonth())
  } ${
    String(date.getDate())
  } ${
    getDateName('day',date.getDay())
  } | ${
    String(date.getHours()).padStart(2,"0")
  }:${
    String(date.getMinutes()).padStart(2,"0")
  }:${
    String(date.getSeconds()).padStart(2,"0")
  }`;
  clockDOM.innerText = time;
}

const getDateName = (mode, value) => {
  let dateName;
  switch(mode) {
    case 'month':
      switch(value) {
        case 0:
          dateName = "Jan";
        break;
        case 1:
          dateName = "Feb";
        break;
        case 2:
          dateName = "Mar";
        break;
        case 3:
          dateName = "Apr";
        break;
        case 4:
          dateName = "May";
        break;
        case 5:
          dateName = "Jun";
        break;
        case 6:
          dateName = "Jul";
        break;
        case 7:
          dateName = "Aug";
        break;
        case 8:
          dateName = "Sep";
        break;
        case 9:
          dateName = "Oct";
        break;
        case 10:
          dateName = "Nov";
        break;
        case 11:
          dateName = "Dec";
        break;
      }
    break;
    case 'day' :
      switch(value) {
        case 0:
          dateName = "Sun";
        break;
        case 1:
          dateName = "Mon";
        break;
        case 2:
          dateName = "Tue";
        break;
        case 3:
          dateName = "Wed";
        break;
        case 4:
          dateName = "Thu";
        break;
        case 5:
          dateName = "Fri";
        break;
        case 6:
          dateName = "Sat";
        break;
      }
    break;
  }
  return dateName;
}

const activateClock = () => {
  clockWrapperDOM.classList.add(ACTIVE_CLASS_NAME);
}
setInterval(showTime, 1000);
setTimeout(activateClock, 1000);
