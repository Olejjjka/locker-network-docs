const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const SwaggerParser = require('@apidevtools/swagger-parser');
const {Parser} = require('@asyncapi/parser');
const {XMLValidator, XMLParser} = require('fast-xml-parser');

function files(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(e =>
    e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)]);
}

(async () => {
  const api = await SwaggerParser.validate('static/openapi/openapi.yaml');
  console.log(`OpenAPI ${api.openapi}: valid, ${Object.keys(api.paths).length} paths`);
  const {document, diagnostics} = await new Parser().parse(fs.readFileSync('static/files/asyncapi/AsyncAPI.yaml', 'utf8'));
  const errors = diagnostics.filter(d => d.severity === 0);
  diagnostics.forEach(d => console.log(`AsyncAPI ${d.severity === 0 ? 'ERROR' : 'notice'}: ${d.message}`));
  assert.equal(errors.length, 0, 'AsyncAPI validation failed');
  assert.ok(document, 'AsyncAPI document not parsed');
  console.log('AsyncAPI: valid');

  const xmlFiles = [...files('docs'), ...files('static/files')].filter(p => /\.(drawio|bpmn|dmn|xml)$/.test(p));
  for (const file of xmlFiles) {
    const xml = fs.readFileSync(file, 'utf8');
    assert.equal(XMLValidator.validate(xml), true, `Malformed XML: ${file}`);
    const parsed = new XMLParser({ignoreAttributes: false}).parse(xml);
    assert.ok(parsed.mxfile || Object.keys(parsed).some(k => /(^|:)definitions$/.test(k)), `Unexpected diagram root: ${file}`);
  }
  console.log(`XML: ${xmlFiles.length} diagram sources well formed (not a BPMN/DMN semantic validation)`);

  let plantuml = 0;
  for (const file of files('docs').filter(p => /\.mdx?$/.test(p) && !p.includes('tutorial-'))) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/```plantuml[^\n]*\n([\s\S]*?)```/g)) {
      assert.ok(match[1].includes('@startuml') && match[1].includes('@enduml'), `Unclosed PlantUML: ${file}`);
      plantuml++;
    }
    const prose = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]+`/g, '');
    assert.ok(!prose.includes('\u2014'), `Long dash in prose: ${file}`);
  }
  console.log(`PlantUML: ${plantuml} bounded blocks; rendering must also be checked in a browser`);
  console.log('Russian prose: no U+2014; code blocks excluded');
})().catch(error => { console.error(error); process.exitCode = 1; });
