import { differenceInDays } from 'date-fns/differenceInDays';
import { differenceInHours } from 'date-fns/differenceInHours';
import { differenceInMinutes } from 'date-fns/differenceInMinutes';
import { format } from 'date-fns/format';
import { isFriday } from 'date-fns/isFriday';
import { isMonday } from 'date-fns/isMonday';
import { isSaturday } from 'date-fns/isSaturday';
import { isSunday } from 'date-fns/isSunday';
import { isThursday } from 'date-fns/isThursday';
import { isToday } from 'date-fns/isToday';
import { isTuesday } from 'date-fns/isTuesday';
import { isWednesday } from 'date-fns/isWednesday';
import { isYesterday } from 'date-fns/isYesterday';
import { enUS } from 'date-fns/locale';

import { HOUR_MINUTE_AMPM } from '@/constants/common';
import type { PollResponse } from '@/types/tweet';

export const formatDate = (date: Date): string => {
  return format(date, 'MMM d');
};

export const formatScheduleDate = (date: Date): string => {
  return format(date, "EEE, MMM d, yyyy 'at' hh:mm a");
};

export const formatRegistrationDate = (registrationDate: string): string => {
  return format(new Date(registrationDate), 'MMMM yyyy');
};

export const formatChatMessageDate = (date: Date): string => {
  const datePattern = format(date, HOUR_MINUTE_AMPM, { locale: enUS });

  if (isToday(date)) return datePattern;

  if (isYesterday(date)) return `Yesterday at ${datePattern}`;

  if (isMonday(date)) return `Mon ${datePattern}`;

  if (isTuesday(date)) return `Tue ${datePattern}`;

  if (isWednesday(date)) return `Wed ${datePattern}`;

  if (isThursday(date)) return `Thu ${datePattern}`;

  if (isFriday(date)) return `Fri ${datePattern}`;

  if (isSaturday(date)) return `Sat ${datePattern}`;

  if (isSunday(date)) return `Sun ${datePattern}`;

  return format(date, 'MMM dd, hh:mm a', { locale: enUS });
};

export const voteFormatDate = (poll: PollResponse): string => {
  if (!poll?.createdAt) {
    return '0 minutes';
  }

  const diffInDays = differenceInDays(new Date(poll.createdAt), Date.now());
  const diffInHours = differenceInHours(new Date(poll.createdAt), Date.now());
  const diffInMinutes = differenceInMinutes(
    new Date(poll.createdAt),
    Date.now(),
  );

  if (diffInDays !== 0) {
    return diffInDays + ' days';
  } else if (diffInHours !== 0) {
    return diffInHours + ' hours';
  } else {
    return diffInMinutes + ' minutes';
  }
};
