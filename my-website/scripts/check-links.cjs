const fs = require('node:fs');
const path = require('node:path');
const {load} = require('cheerio');
const root = path.resolve('build');
const origin = 'https://olejjjka.github.io';
const base = '/locker-network-docs/';
function files(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(e =>
    e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)]);
}
const pages = files(root).filter(p => p.endsWith('.html'));
const parsed = new Map(pages.map(p => [p, load(fs.readFileSync(p, 'utf8'))]));
const errors = new Set();
let checked = 0;
for (const [file, $] of parsed) {
  const route = base + path.relative(root, file).replaceAll(path.sep, '/').replace(/index\.html$/, '').replace(/\.html$/, '');
  $('a[href], img[src], script[src], link[href]').each((_, element) => {
    const raw = $(element).attr('href') || $(element).attr('src');
    if (!raw || /^(mailto:|tel:|data:|javascript:)/.test(raw)) return;
    const url = new URL(raw, origin + route);
    if (url.origin !== origin) return;
    checked++;
    if (!url.pathname.startsWith(base)) {
      errors.add(`${route}: missing baseUrl in ${raw}`); return;
    }
    const target = path.resolve(root, decodeURIComponent(url.pathname.slice(base.length)));
    if (target !== root && !target.startsWith(root + path.sep)) {
      errors.add(`${route}: path escapes build: ${raw}`); return;
    }
    const resolved = [target, target + '.html', path.join(target, 'index.html')].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!resolved) {errors.add(`${route}: missing ${raw}`); return;}
    if (url.hash && parsed.has(resolved)) {
      const id = decodeURIComponent(url.hash.slice(1));
      const targetPage = parsed.get(resolved);
      const found = targetPage('[id], a[name]').toArray().some(e => targetPage(e).attr('id') === id || targetPage(e).attr('name') === id);
      if (!found) errors.add(`${route}: missing anchor ${raw}`);
    }
  });
}
for (const error of errors) console.error(error);
console.log(`${pages.length} HTML pages, ${checked} internal links/assets, ${errors.size} errors`);
if (errors.size) process.exitCode = 1;
