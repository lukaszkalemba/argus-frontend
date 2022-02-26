import { format } from 'date-fns';

export const getDateWithHours = (timestamp: string) => format(new Date(timestamp), 'dd.MM.yyyy, hh:mm a');
