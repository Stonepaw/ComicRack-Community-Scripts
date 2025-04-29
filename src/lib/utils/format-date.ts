const LOCAL_DATE_FORMATTER = Intl.DateTimeFormat(undefined, { dateStyle: 'long' });

/**
 * Formats a date in a standard localized date only format.
 */
export function formatDate(date: Date | string): string {
	return LOCAL_DATE_FORMATTER.format(new Date(date));
}
