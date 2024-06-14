import { format, getTime, formatDistanceToNow, differenceInDays, formatDistanceStrict } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fTime(date, newFormat) {
  const fm = newFormat || 'p';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function getDaysDifference(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);

    const difference = differenceInDays(event, now);

    if (difference > 0) {
      return `${difference} days left`;
    } else if (difference < 0) {
      return `${Math.abs(difference)} days ago`;
    } else {
      return 'Today';
    }
  }
export function fToNowFormated(date) {
  return date ? formatDistanceStrict(new Date(date), new Date()) : '';
}

export function fToNowDate(date) {
  return date ? `${differenceInDays(new Date(), new Date(date))} days` : '';
}

export function isBetween(inputDate, startDate, endDate) {
  const date = new Date(inputDate);

  const results =
    new Date(date.toDateString()) >= new Date(startDate.toDateString()) &&
    new Date(date.toDateString()) <= new Date(endDate.toDateString());

  return results;
}



export function isAfter(startDate, endDate) {
  const results =
    startDate && endDate ? new Date(startDate).getTime() > new Date(endDate).getTime() : false;

  return results;
}
