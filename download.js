import { writeFileSync } from 'fs';
import { join } from 'path';

const files = [
  'src/**/*',
  'public/**/*',
  '*.json',
  '*.js',
  '*.ts',
  '.env.example',
  'README.md'
];

console.log('Download your project files from the file tree on the left.');