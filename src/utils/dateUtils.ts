export interface DateDifference {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
}

export function calculateDateDifference(startDate: Date, endDate: Date): DateDifference {
  const differenceInMs = endDate.getTime() - startDate.getTime();

  const msInHour = 1000 * 60 * 60;
  const msInDay = msInHour * 24;
  // const msInWeek = msInDay * 7;

  let remainingMs = differenceInMs;

  const years = Math.floor(remainingMs / (msInDay * 365));
  remainingMs %= msInDay * 365;

  let months = 0;
  let tempDate = new Date(startDate);
  tempDate.setFullYear(startDate.getFullYear() + years);

  while (tempDate < endDate) {
    tempDate.setMonth(tempDate.getMonth() + 1);
    if (tempDate <= endDate) {
      months++;
    } else {
      tempDate.setMonth(tempDate.getMonth() - 1);
      break;
    }
  }

  const remainingDays = Math.floor((endDate.getTime() - tempDate.getTime()) / msInDay);
  const weeks = Math.floor(remainingDays / 7);
  const days = remainingDays % 7;
  const hours = Math.floor((endDate.getTime() - tempDate.getTime()) % msInDay / msInHour);

  return { years, months, weeks, days, hours };
}