import fs from 'node:fs';
import type { ComicRackScript } from '../src/lib';
import { SCRIPT_DETAILS_OUTPUT_DIR } from './paths';

/**
 * Writes the details of each script to a file in the "generated" directory.
 */
export function generateDetails(scripts: ComicRackScript[]) {
	fs.mkdirSync(SCRIPT_DETAILS_OUTPUT_DIR, { recursive: true });
	for (const script of scripts) {
		fs.writeFileSync(
			`${SCRIPT_DETAILS_OUTPUT_DIR}/${script.id}.json`,
			JSON.stringify(script, null, '')
		);
	}
}
