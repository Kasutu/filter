import DateAndTime, { Date, Time } from '../interface/dateAndTime.interface';
import GlobalTypes from '../type/global.type';

export default class DateParser {
  public dateParser(
    dateStr: GlobalTypes['dateAndTimeArr'] | GlobalTypes['dateAndTimeStr'],
    option: 'date'
  ): Date;
  public dateParser(
    timeStr: GlobalTypes['dateAndTimeArr'] | GlobalTypes['dateAndTimeStr'],
    option: 'time'
  ): Time;
  public dateParser(
    dateAndTimeStr:
      | GlobalTypes['dateAndTimeArr']
      | GlobalTypes['dateAndTimeStr'],
    option: 'both'
  ): DateAndTime;

  public dateParser(
    dateStr: GlobalTypes['dateAndTimeArr'] | GlobalTypes['dateAndTimeStr'],
    option: 'date',
    type?: 'arr' | 'obj'
  ): Date[];
  public dateParser(
    timeStr: GlobalTypes['dateAndTimeArr'] | GlobalTypes['dateAndTimeStr'],
    option: 'time',
    type?: 'arr' | 'obj'
  ): Time[];
  public dateParser(
    dateAndTimeStr:
      | GlobalTypes['dateAndTimeArr']
      | GlobalTypes['dateAndTimeStr'],
    option: 'both',
    type?: 'arr' | 'obj'
  ): DateAndTime[];

  public dateParser(
    arg1: GlobalTypes['dateAndTimeArr'] | GlobalTypes['dateAndTimeStr'],
    arg2: 'date' | 'time' | 'both',
    arg3?: 'arr' | 'obj'
  ): unknown {
    if (arg2 === 'date') {
      // date
      if (typeof arg1 === 'string' && arg3 === 'obj' && arg3 !== undefined) {
        const dataArr = arg1.split(' ');
        const temp: Date = getData(dataArr, 'date');
        return temp;
      } else {
        const tempArr: Date[] = [];

        for (let i = 0; i < arg1.length; i++) {
          const dataArr = arg1[i].split(' ');
          const temp: Date = getData(dataArr, 'date');
          tempArr.push(temp);
        }

        return tempArr;
      }
    } else if (arg2 === 'time') {
      // time
      if (typeof arg1 === 'string' && arg3 === 'obj' && arg3 !== undefined) {
        const dataArr = arg1.split(' ');
        const temp: Time = getData(dataArr, 'time');
        return temp;
      } else {
        const tempArr: Time[] = [];

        for (let i = 0; i < arg1.length; i++) {
          const dataArr = arg1[i].split(' ');
          const temp: Time = getData(dataArr, 'time');
          tempArr.push(temp);
        }

        return tempArr;
      }
    } else if (arg2 === 'both') {
      // date and time
      if (typeof arg1 === 'string' && arg3 === 'obj' && arg3 !== undefined) {
        const dataArr = arg1.split(' ');
        const temp: DateAndTime = getData(dataArr, 'both');
        return temp;
      } else {
        const tempArr: DateAndTime[] = [];

        for (let i = 0; i < arg1.length; i++) {
          const dataArr = arg1[i].split(' ');
          const temp: DateAndTime = getData(dataArr, 'both');
          tempArr.push(temp);
        }

        return tempArr;
      }
    }
  }
}

function getData(dataArr: string[], type?: 'date'): Date;
function getData(dataArr: string[], type?: 'time'): Time;
function getData(dataArr: string[], type?: 'both'): DateAndTime;

function getData(dataArr: string[], type?: 'date' | 'time' | 'both'): unknown {
  if (type === 'date') {
    const tempDate: Date = {
      year: Number(dataArr[0].split('-')[0]),
      month: Number(dataArr[0].split('-')[1]),
      day: Number(dataArr[0].split('-')[2]),
    };

    return tempDate;
  } else if (type === 'time') {
    const tempTime: Time = {
      hours: Number(dataArr[1].split(':')[0]),
      minutes: Number(dataArr[1].split(':')[1]),
      suffix: dataArr[1].split(':')[2] as 'am' | 'pm',
    };

    return tempTime;
  } else if (type === 'both') {
    const tempData: DateAndTime = {
      year: Number(dataArr[0].split('-')[0]),
      month: Number(dataArr[0].split('-')[1]),
      day: Number(dataArr[0].split('-')[2]),
      hours: Number(dataArr[1].split(':')[0]),
      minutes: Number(dataArr[1].split(':')[1]),
      suffix: dataArr[1].split(':')[2] as 'am' | 'pm',
    };
    return tempData;
  }
}
