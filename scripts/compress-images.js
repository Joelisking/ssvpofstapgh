import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const INPUT_DIR = path.join(__dirname, '../public/gallery');
const OUTPUT_DIR = path.join(INPUT_DIR, 'optimized');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];
const QUALITY = 80; // JPEG quality (0-100)
const WEBP_QUALITY = 80; // WebP quality (0-100)
const COMPRESSION_OPTIONS = {
  jpeg: {
    quality: QUALITY,
    progressive: true,
    mozjpeg: true,
  },
  webp: {
    quality: WEBP_QUALITY,
    effort: 6,
  },
  png: {
    compressionLevel: 9,
    progressive: true,
  },
};

// Ensure output directory exists
function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }
}

// Get all image files from input directory
function getImageFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return SUPPORTED_FORMATS.includes(ext) && !file.startsWith('.');
  });
}

// Compress a single image
async function compressImage(inputPath, outputPath, originalSize) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const filename = path.basename(inputPath, ext);

    let sharpInstance = sharp(inputPath);

    // Apply compression based on file type
    if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg(COMPRESSION_OPTIONS.jpeg);
    } else if (ext === '.png') {
      sharpInstance = sharpInstance.png(COMPRESSION_OPTIONS.png);
    } else if (ext === '.webp') {
      sharpInstance = sharpInstance.webp(COMPRESSION_OPTIONS.webp);
    }

    // Resize if image is too large (optional)
    const metadata = await sharpInstance.metadata();
    if (metadata.width > 1920 || metadata.height > 1920) {
      sharpInstance = sharpInstance.resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    await sharpInstance.toFile(outputPath);

    // Get compressed file size
    const compressedStats = fs.statSync(outputPath);
    const compressedSize = compressedStats.size;
    const savings = (
      ((originalSize - compressedSize) / originalSize) *
      100
    ).toFixed(1);

    console.log(
      `✓ ${filename}${ext} - ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`
    );

    return {
      original: originalSize,
      compressed: compressedSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return null;
  }
}

// Main compression function
async function compressImages() {
  console.log('🖼️  Starting image compression...\n');

  ensureOutputDir();

  const imageFiles = getImageFiles(INPUT_DIR);

  if (imageFiles.length === 0) {
    console.log(
      'No supported image files found in the gallery directory.'
    );
    return;
  }

  console.log(`Found ${imageFiles.length} images to compress:\n`);

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let successCount = 0;
  let errorCount = 0;
  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);

    try {
      const stats = fs.statSync(inputPath);
      const result = await compressImage(
        inputPath,
        outputPath,
        stats.size
      );

      if (result) {
        totalOriginalSize += result.original;
        totalCompressedSize += result.compressed;
        successCount++;
      } else {
        errorCount++;
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Successfully compressed: ${successCount} images`);
  if (errorCount > 0) {
    console.log(`❌ Failed to compress: ${errorCount} images`);
  }
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(
    `💾 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `💾 Total compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `🎯 Total space saved: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `📉 Average compression: ${(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100).toFixed(1)}%`
  );
  console.log('='.repeat(50));

  if (successCount > 0) {
    console.log(
      '\n✨ Compression complete! Optimized images are saved in the optimized folder.'
    );
    console.log(
      '💡 You can now use these optimized images in your application.'
    );
  }
}

// Handle command line arguments
function showHelp() {
  console.log(`
🖼️  Image Compression Script

Usage: node scripts/compress-images.js [options]

Options:
  --help, -h     Show this help message
  --quality, -q  Set JPEG quality (0-100, default: 80)
  --webp, -w     Also create WebP versions
  --resize, -r   Resize large images (default: max 1920x1920)

Examples:
  node scripts/compress-images.js
  node scripts/compress-images.js --quality 85
  node scripts/compress-images.js --webp --resize
`);
}

// Parse command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

// Run the compression
compressImages().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
