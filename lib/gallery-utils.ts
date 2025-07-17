import fs from 'fs';
import path from 'path';
import { GalleryImage } from './types';

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

/**
 * Get all images from the public/gallery directory
 * @param useOptimized - Whether to use optimized images from the optimized subdirectory
 * @returns Array of GalleryImage objects
 */
export function getGalleryImages(
  useOptimized: boolean = true
): GalleryImage[] {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  const imagesPath = galleryPath;

  // Check if the directory exists
  if (!fs.existsSync(imagesPath)) {
    console.warn(`Gallery directory not found: ${imagesPath}`);
    return [];
  }

  try {
    const files = fs.readdirSync(imagesPath);

    const images: GalleryImage[] = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return (
          SUPPORTED_FORMATS.includes(ext) && !file.startsWith('.')
        );
      })
      .map((file) => {
        const ext = path.extname(file);
        const name = path.basename(file, ext);

        // Create a web-friendly path
        const imagePath = useOptimized
          ? `/gallery/${file}`
          : `/gallery/${file}`;

        // Generate alt text from filename
        const altText = name
          .replace(/[_\-]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        return {
          src: imagePath,
          alt: altText,
          caption: altText,
          category: 'Gallery', // You can customize this or extract from filename
        };
      })
      .sort((a, b) => {
        // Sort by filename for consistent ordering
        return a.src.localeCompare(b.src);
      });

    return images;
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

/**
 * Get gallery images with categories based on filename patterns
 * @param useOptimized - Whether to use optimized images
 * @returns Array of GalleryImage objects with categories
 */
export function getGalleryImagesWithCategories(
  useOptimized: boolean = true
): GalleryImage[] {
  const images = getGalleryImages(useOptimized);

  return images.map((image) => {
    const filename = path.basename(image.src);

    // Extract category from filename patterns
    let category = 'Gallery';
    // You can add more category detection logic here
    // For example, based on filename prefixes or patterns
    if (filename.includes('_MG_')) {
      category = 'Events';
    }

    return {
      ...image,
      category,
    };
  });
}

/**
 * Get gallery statistics
 * @returns Object with gallery statistics
 */
export function getGalleryStats() {
  const originalImages = getGalleryImages(false);
  const optimizedImages = getGalleryImages(true);

  return {
    totalImages: originalImages.length,
    optimizedImages: optimizedImages.length,
    hasOptimized: optimizedImages.length > 0,
  };
}
