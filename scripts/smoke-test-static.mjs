import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const html = readFileSync('index.html', 'utf8');
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

assert(html.includes('<!DOCTYPE html>'), 'index.html must declare an HTML doctype.');
assert(html.includes('<section id="home"'), 'index.html must include the home route container.');
assert(html.includes('<section id="ai"'), 'index.html must include the AI workspace route container.');
assert(html.includes('id="chatInput"'), 'AI workspace must expose the chat input.');
assert(html.includes('id="sendChat"'), 'AI workspace must expose the send button.');
assert(html.includes('esc(m.text)'), 'Chat messages must be escaped before rendering into innerHTML.');
assert(!html.includes('<p>${m.text}</p>'), 'Chat messages must not render raw user text into innerHTML.');

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
assert(scripts.length > 0, 'index.html must include an inline script to validate.');

if (scripts.length > 0) {
  const workDir = mkdtempSync(join(tmpdir(), 'rkix3-smoke-'));
  const scriptPath = join(workDir, 'index-inline-script.js');
  writeFileSync(scriptPath, scripts.join('\n'), 'utf8');
  const result = spawnSync(process.execPath, ['--check', scriptPath], { encoding: 'utf8' });
  if (result.status !== 0) {
    failures.push(`Inline JavaScript failed syntax check:\n${result.stderr || result.stdout}`);
  }
  rmSync(workDir, { recursive: true, force: true });
}

if (failures.length > 0) {
  console.error('Static smoke test failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Static smoke test passed.');
