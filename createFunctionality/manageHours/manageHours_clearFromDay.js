function manageHours_clearFromDay(day) {
  for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
    day.getElementsByClassName('hour')[r].remove();
  }
}

export default manageHours_clearFromDay;