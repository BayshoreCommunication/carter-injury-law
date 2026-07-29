const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('C:\\Users\\Raihan\\.gemini\\antigravity-ide\\brain\\c46cd3b7-5bd6-435d-bd26-4676ae611f25\\.system_generated\\steps\\45\\content.md', 'utf8');

// Parse text from doc HTML structure
let cleanText = content
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"');

const lines = cleanText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
fs.writeFileSync('scratch/extracted_doc.txt', lines.join('\n'));
console.log('Saved lines:', lines.length);
