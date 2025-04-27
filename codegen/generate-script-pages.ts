import fs from 'node:fs';
import ts, { factory, NewLineKind } from 'typescript';

/**
 * Generates a simple typescript file containing an exported constant array of script names found in
 * the "scripts" directory.
 *
 * @param scriptSlugs The slugs of the scripts matching the exported details json file names.
 */
export async function generateScriptPages(scriptSlugs: string[]) {
	const scriptNamesNode = factory.createVariableStatement(
		[factory.createToken(ts.SyntaxKind.ExportKeyword)],
		factory.createVariableDeclarationList(
			[
				factory.createVariableDeclaration(
					factory.createIdentifier('SCRIPT_SLUGS'),
					undefined,
					undefined,
					factory.createAsExpression(
						factory.createArrayLiteralExpression(
							scriptSlugs.map((name) => factory.createStringLiteral(name)),
							false
						),
						factory.createTypeReferenceNode(factory.createIdentifier('const'), undefined)
					)
				)
			],
			ts.NodeFlags.Const
		)
	);

	const printer = ts.createPrinter({ newLine: NewLineKind.LineFeed });

	const source = ts.createSourceFile(
		'script-slugs.ts',
		'',
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TS
	);

	const result = printer.printNode(ts.EmitHint.Unspecified, scriptNamesNode, source);

	fs.mkdirSync('./src/lib/generated', { recursive: true });
	fs.writeFileSync('./src/lib/generated/script-slugs.ts', result);
}
