import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distCssDir = path.resolve(__dirname, 'dist/assets');

// Регулярка ищет ../../img/... и ../../fonts/...
const assetsPattern = /url\(["']?(?:\.\.\/)+(img|fonts)\/([^"')]+)["']?\)/g;

async function replacePathsInCss(dir) {
  const files = await readdir(dir);

  for (const file of files) {
    if (file.endsWith('.css')) {
      const filePath = path.join(dir, file);

      try {
        const content = await readFile(filePath, 'utf8');

        const updatedContent = content.replace(assetsPattern, (match, folder, filepath) => {
          const filename = path.basename(filepath); // удаляем подпапки
          return `url('/accelerator-project-2/assets/${filename}')`;
        });

        if (content !== updatedContent) {
          await writeFile(filePath, updatedContent, 'utf8');
          console.log(`📝 Обновлено: ${filePath}`);
        }
      } catch (err) {
        console.error(`❌ Ошибка при обработке ${filePath}:`, err);
      }
    }
  }
}

(async () => {
  await replacePathsInCss(distCssDir);
  console.log('✅ Пути в CSS обновлены (подпапки отброшены)');
})();
