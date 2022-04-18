import dateParser from './util/dateParser.util';
import EventData from './dummyData/event.dummy';
import randomDuration from './util/randomDuration.util';

const eventProp = new EventData();

const list = dateParser(eventProp.dates, 'both', 'arr');

console.log('Done Parsing...');
console.log(randomDuration(list));
