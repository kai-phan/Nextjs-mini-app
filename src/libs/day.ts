import dayjs, { ConfigType } from 'dayjs';
import en from 'dayjs/locale/en';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(utc);
dayjs.extend(weekOfYear);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.locale(en);

export default (date?: ConfigType, format?: string, strict?: boolean) =>
  dayjs.utc(date, format, strict).tz(dayjs.tz.guess());
