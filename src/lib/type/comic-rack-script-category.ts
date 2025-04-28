/**
 * The possible script categories.
 */
export const ComicRackScriptCategory = {
	fileManagement: 'file-management',
	metadata: 'metadata',
	other: 'other',
	scrapers: 'scrapers',
	smartLists: 'smart-lists'
} as const;
export type ComicRackScriptCategory =
	(typeof ComicRackScriptCategory)[keyof typeof ComicRackScriptCategory];

/**
 * The human-readable name of each category.
 */
export const ComicRackScriptCategoryName: Record<ComicRackScriptCategory, string> = {
	[ComicRackScriptCategory.fileManagement]: 'File Management',
	[ComicRackScriptCategory.metadata]: 'Metadata',
	[ComicRackScriptCategory.other]: 'Other',
	[ComicRackScriptCategory.scrapers]: 'Scrapers',
	[ComicRackScriptCategory.smartLists]: 'Smart Lists'
} as const;
