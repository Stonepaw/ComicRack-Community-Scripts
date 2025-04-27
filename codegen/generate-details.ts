import fs from 'node:fs';
import type { ComicRackScript } from '../src/lib';

/**
 * Writes the details of each script to a file in the "generated" directory.
 */
export async function generateDetails(scripts: ComicRackScript[]) {
	for (const script of scripts) {
		fs.mkdirSync(`src/lib/generated/script`, { recursive: true });
		fs.writeFileSync(
			`src/lib/generated/script/${script.id}.json`,
			JSON.stringify(script, null, '')
		);
	}
}
