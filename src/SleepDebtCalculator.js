//creating an arrow function to determine how many hours of sleep you get each night of the week:
const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 5;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 4;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 11;
      break;
    default:
      return 'Error!';
  }
};
//function to calculate the total sleep hours that were slept using implicit return:
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//function calculating the ideal number of hours per night/week:
const getIdealSleepHours = idealHours => idealHours * 7;
//function to calculate "sleep debt":
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours){
    console.log('You exceeded your sleep goal by ' + (actualSleepHours - idealSleepHours) + ' hour(s)');
  } else {
    console.log('You are ' + (idealSleepHours - actualSleepHours) + ' hour(s) behind on sleep: get some rest!');
  }
};
calculateSleepDebt();

