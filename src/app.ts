import randomDuration from './util/randomDuration.util';
import dateParser, { getDateAndTime } from './util/dateParser.util';
import getRandom from './util/functions.util';
import EventData from './dummyData/event.dummy';
import DateAndTime from './interface/dateAndTime.interface';

const eventProp = new EventData();

console.log(randomDuration(getDateAndTime('array', eventProp.dates)));
