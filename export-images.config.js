/**
 * @type {import('next-image-export-optimizer').Config}
 */
const config = {
  imageFolderPath: 'public',
  exportFolderPath: 'out',
  quality: 75,
  storePicturesInWEBP: true,
  exportFolderName: 'nextImageExportOptimizer',
  generateAndUseBlurImages: true,
  remoteImageCacheTTL: 0,
};

module.exports = config;
