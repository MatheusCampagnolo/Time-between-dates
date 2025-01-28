import { calculateDateDifference } from './utils/dateUtils';
import { DateDifference } from './interfaces';

function formatDateDifference(difference: DateDifference): string {
  const { years, months, weeks, days, hours } = difference;

  let result = '';
  if (years > 0) result += `${years} years, `;
  if (months > 0) result += `${months} months, `;
  if (weeks > 0) result += `${weeks} weeks, `;
  if (days > 0) result += `${days} days, `;
  if (hours > 0) result += `${hours} hours`;

  return result.replace(/, $/, '');
}

const startDate = new Date('2023-10-01T12:00:00');
const endDate = new Date('2023-10-05T15:30:00');

const difference = calculateDateDifference(startDate, endDate);

console.log('Difference:', formatDateDifference(difference));
