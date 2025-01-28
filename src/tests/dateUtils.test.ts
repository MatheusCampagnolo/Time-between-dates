import { calculateDateDifference } from '../utils/dateUtils';

describe('calculateDateDifference', () => {
  it('should calculate the difference between two dates in years, months, weeks, days, and hours', () => {
    const startDate = new Date('2023-01-01T12:00:00');
    const endDate = new Date('2024-03-15T15:30:00');

    const result = calculateDateDifference(startDate, endDate);

    expect(result).toEqual({
      years: 1,
      months: 2,
      weeks: 2,
      days: 0,
      hours: 3,
    });
  });

  it('should handle a difference of less than an hour', () => {
    const startDate = new Date('2023-10-01T12:00:00');
    const endDate = new Date('2023-10-01T12:30:00');

    const result = calculateDateDifference(startDate, endDate);

    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
    });
  });

  it('should handle a difference of exactly one year', () => {
    const startDate = new Date('2023-01-01T12:00:00');
    const endDate = new Date('2024-01-01T12:00:00');

    const result = calculateDateDifference(startDate, endDate);

    expect(result).toEqual({
      years: 1,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
    });
  });

  it('should handle a difference of exactly one month', () => {
    const startDate = new Date('2023-01-01T12:00:00');
    const endDate = new Date('2023-02-01T12:00:00');
  
    const result = calculateDateDifference(startDate, endDate);
  
    expect(result).toEqual({
      years: 0,
      months: 1,
      weeks: 0,
      days: 0,
      hours: 0,
    });
  });

  it('should handle a difference of exactly one week', () => {
    const startDate = new Date('2023-01-01T12:00:00');
    const endDate = new Date('2023-01-08T12:00:00');

    const result = calculateDateDifference(startDate, endDate);

    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 1,
      days: 0,
      hours: 0,
    });
  });

  it('should handle a difference of exactly one day', () => {
    const startDate = new Date('2023-01-01T12:00:00');
    const endDate = new Date('2023-01-02T12:00:00');

    const result = calculateDateDifference(startDate, endDate);

    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 0,
      days: 1,
      hours: 0,
    });
  });

  it('should handle a difference of exactly one hour', () => {
    const startDate = new Date('2023-01-01T12:00:00');
    const endDate = new Date('2023-01-01T13:00:00');

    const result = calculateDateDifference(startDate, endDate);

    expect(result).toEqual({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 1,
    });
  });
});