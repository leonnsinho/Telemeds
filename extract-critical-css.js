import { generate } from 'critical';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your built HTML file
const htmlPath = path.join(__dirname, 'dist', 'index.html');

// Extract critical CSS
generate({
  base: 'dist/',
  src: 'index.html',
  target: {
    html: 'index.html',
    css: 'critical.css',
  },
  width: 1300,
  height: 900,
  inline: false,
}).then(result => {
  console.log('Critical CSS extracted successfully');
}).catch(err => {
  console.error('Error extracting critical CSS:', err);
});
