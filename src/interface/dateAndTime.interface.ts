export default interface DateAndTime {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  suffix: 'am' | 'pm';
}

export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface Time {
  hours: number;
  minutes: number;
  suffix: 'am' | 'pm';
}
