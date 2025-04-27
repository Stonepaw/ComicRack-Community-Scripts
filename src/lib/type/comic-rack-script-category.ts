/**
 * The possible script categories.
 */
export const ComicRackScriptCategory = {
	fileManagement: 'file-management'
} as const;
export type ComicRackScriptCategory =
	(typeof ComicRackScriptCategory)[keyof typeof ComicRackScriptCategory];

/**
 * The human readable name of each category.
 */
export const ComicRackScriptCategoryName: Record<ComicRackScriptCategory, string> = {
	'file-management': 'File Management'
} as const;
