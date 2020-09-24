import createTickGraphic from './createTickGraphic.js';
import appendNumberToSingleHour from './appendNumberToSingleHour.js';
import createHourElement from './createHourElement.js';

function appendSingleHourToDay(numberOfTheHour, day) {
  const hour = createHourElement();
  appendNumberToSingleHour(numberOfTheHour, hour);
  day.appendChild(hour);
}

export default appendSingleHourToDay;