const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'src', 'icon.tsx');
const outPath = path.join(
  __dirname,
  '..',
  'src',
  'components',
  'icons',
  'icon-data.tsx',
);

const src = fs.readFileSync(srcPath, 'utf8');

const regex = /export const\s+([A-Za-z0-9_]+)\s*=\s*\((([\s\S]*?)?)\);/g;
let m;
const icons = [];
while ((m = regex.exec(src)) !== null) {
  const name = m[1];
  const content = m[2] || '';

  // Try to find a <svg ...>...</svg>
  const svgMatch = content.match(/<svg[\s\S]*?>[\s\S]*?<\/svg>/);
  let viewBox = '0 0 24 24';
  let inner = content.trim();
  if (svgMatch) {
    const svg = svgMatch[0];
    const vb = svg.match(/viewBox\s*=\s*"([^"]+)"/);
    if (vb) viewBox = vb[1];
    // get inner content between first > after <svg...> and </svg>
    const innerMatch = svg.match(/<svg[\s\S]*?>([\s\S]*?)<\/svg>/);
    inner = innerMatch ? innerMatch[1].trim() : '';
  } else {
    // no svg tag, use content as-is
    inner = content.trim();
  }

  // normalize whitespace
  inner = inner.replace(/\n\s*/g, '');
  // escape backticks and dollar braces to avoid template issues
  inner = inner.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

  icons.push({ name, viewBox, path: inner });
}

// Build TypeScript file
const names = icons.map((i) => i.name).sort();
const union = names.map((n) => `'${n}'`).join(' |\n  ');

let out = `export type IconName =\n  ${union};\n\n`;
out += `export const SVG_ICON_DATA: Record<IconName, { viewBox: string; path: string }> = {\n`;
for (const ic of icons) {
  out += `  ${ic.name}: {\n    viewBox: '${ic.viewBox}',\n    path: '\n${ic.path.replace(/'/g, "\\'")}\n',\n  },\n`;
}
out += `};\n`;

fs.writeFileSync(outPath, out, 'utf8');
console.log('Wrote', outPath);
