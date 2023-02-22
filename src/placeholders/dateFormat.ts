/**
 * {@link https://github.com/flutter/flutter/blob/91aeda7bf6f977207d7ac07ca46c26560007a244/packages/flutter_tools/lib/src/localizations/gen_l10n_types.dart#L28}
 */
export const validDateFormats = [
  'd',
  'E',
  'EEEE',
  'LLL',
  'LLLL',
  'M',
  'Md',
  'MEd',
  'MMM',
  'MMMd',
  'MMMEd',
  'MMMM',
  'MMMMd',
  'MMMMEEEEd',
  'QQQ',
  'QQQQ',
  'y',
  'yM',
  'yMd',
  'yMEd',
  'yMMM',
  'yMMMd',
  'yMMMEd',
  'yMMMM',
  'yMMMMd',
  'yMMMMEEEEd',
  'yQQQ',
  'yQQQQ',
  'H',
  'Hm',
  'Hms',
  'j',
  'jm',
  'jms',
  'jmv',
  'jmz',
  'jv',
  'jz',
  'm',
  'ms',
  's'
];

export function notInclude(value: string) {
  return !validDateFormats.includes(value);
}
