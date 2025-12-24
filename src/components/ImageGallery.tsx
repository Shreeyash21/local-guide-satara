import React from 'react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description?: string;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {images.map((image, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-1">🖼️</div>
              <div className="text-xs px-2">{image.alt}</div>
            </div>
          </div>
          <div className="p-3">
            <h4 className="font-medium text-sm text-gray-800">{image.title}</h4>
            {image.description && (
              <p className="text-xs text-gray-600 mt-1">{image.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;