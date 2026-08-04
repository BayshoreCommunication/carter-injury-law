import seoImagesData from '@/data/seo-service-images.json';

export const seoServiceData = seoImagesData;

export function getSeoImage(idOrFileName, folderSlug) {
  let images = [];

  if (folderSlug && seoImagesData.services && seoImagesData.services[folderSlug]) {
    images = seoImagesData.services[folderSlug].images;
  } else if (seoImagesData.services) {
    // Default to the first service if no folder specified
    const firstKey = Object.keys(seoImagesData.services)[0];
    images = seoImagesData.services[firstKey]?.images || [];
  }

  const found = images.find(
    (img) => img.id === idOrFileName || img.fileName === idOrFileName
  );

  if (found) return found;

  // Search across all services if not found in specific folder
  if (seoImagesData.services) {
    for (const sKey in seoImagesData.services) {
      const item = seoImagesData.services[sKey].images.find(
        (img) => img.id === idOrFileName || img.fileName === idOrFileName
      );
      if (item) return item;
    }
  }

  return {
    id: idOrFileName,
    fileName: idOrFileName,
    filePath: `/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/${idOrFileName}`,
    altText: 'Carter Injury Law',
    title: 'Carter Injury Law',
    description: '',
    caption: ''
  };
}

export default getSeoImage;
