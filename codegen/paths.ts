import path from 'node:path';

/**
 * The output directory for the generated files.
 */
export const OUTPUT_DIR = path.join(process.cwd(), 'src/lib/generated');

/**
 * The output directory for the category files.
 */
export const CATEGORIES_OUTPUT_DIR = `${OUTPUT_DIR}/categories`;

/**
 * The output directory for the script details files.
 */
export const SCRIPT_DETAILS_OUTPUT_DIR = `${OUTPUT_DIR}/script`;

/**
 * The directory containing the script yaml files to be parsed.
 */
export const SCRIPTS_DIR = path.join(process.cwd(), 'scripts');

/**
 * The output file for the script slugs.
 */
export const SCRIPT_SLUGS_OUTPUT = `${OUTPUT_DIR}/script-slugs.ts`;
