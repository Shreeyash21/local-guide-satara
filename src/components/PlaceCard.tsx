import React from 'react';

interface PlaceCardProps {
  name: string;
  marathi?: string;
  type: string;
  description: string;
  rating?: number;
  image?: string;
  priceRange?: string;
  location?: string;
  timings?: string;
  localTip?: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  name,
  marathi,
  type,
  description,
  rating,
  image,
  priceRange,
  location,
  timings,
  localTip
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Image */}
      {image && (
        <div className="h-48 bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">🏛️</div>
            <div className="text-sm">Image: {image}</div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            {marathi && (
              <p className="text-sm text-gray-600 font-medium">{marathi}</p>
            )}
            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full mt-1">
              {type}
            </span>
          </div>
          {rating && (
            <div className="flex items-center bg-green-100 px-2 py-1 rounded">
              <span className="text-yellow-500 text-sm">⭐</span>
              <span className="text-sm font-medium text-green-800 ml-1">{rating}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-3 leading-relaxed">{description}</p>

        {/* Details */}
        <div className="space-y-2 text-sm">
          {priceRange && (
            <div className="flex items-center text-gray-600">
              <span className="text-green-600 mr-2">💰</span>
              <span>{priceRange}</span>
            </div>
          )}
          
          {location && (
            <div className="flex items-center text-gray-600">
              <span className="text-blue-600 mr-2">📍</span>
              <span>{location}</span>
            </div>
          )}
          
          {timings && (
            <div className="flex items-center text-gray-600">
              <span className="text-purple-600 mr-2">🕒</span>
              <span>{timings}</span>
            </div>
          )}
        </div>

        {/* Local Tip */}
        {localTip && (
          <div className="mt-3 p-2 bg-orange-50 border-l-4 border-orange-400 rounded">
            <p className="text-sm text-orange-800">
              <span className="font-medium">💡 Local Tip:</span> {localTip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;