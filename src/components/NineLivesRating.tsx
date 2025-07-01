
import { Cat } from "lucide-react";

interface NineLivesRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  showNumeric?: boolean;
}

const NineLivesRating = ({ 
  rating, 
  size = "md", 
  showLabel = false, 
  showNumeric = true 
}: NineLivesRatingProps) => {
  const getColorClass = (lives: number) => {
    if (lives >= 8) return "text-orange-500"; // 9-Lives Certified
    if (lives >= 6) return "text-green-500"; // Premium
    if (lives === 5) return "text-blue-500"; // Best Value
    if (lives >= 3) return "text-yellow-500"; // Budget Pick
    return "text-red-500"; // Low-durability
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm": return "w-4 h-4";
      case "lg": return "w-8 h-8";
      default: return "w-5 h-5";
    }
  };

  const getLabelText = (lives: number) => {
    if (lives >= 8) return "9-Lives Certified";
    if (lives >= 6) return "Premium";
    if (lives === 5) return "Best Value";
    if (lives >= 3) return "Budget Pick";
    return "Low-durability";
  };

  // Simplified 5-cat display
  const displayCats = () => {
    const cats = [];
    const fullCats = Math.floor(rating / 2);
    const hasHalfCat = rating % 2 === 1;
    
    for (let i = 0; i < 5; i++) {
      const isFilled = i < fullCats || (i === fullCats && hasHalfCat);
      const isHalf = i === fullCats && hasHalfCat;
      const colorClass = isFilled ? getColorClass(rating) : "text-gray-300";
      
      cats.push(
        <div key={i} className="relative">
          <Cat
            className={`${getSizeClass()} ${colorClass} ${isFilled ? 'fill-current' : ''}`}
            strokeWidth={isFilled ? 0 : 2}
          />
          {isHalf && (
            <div className="absolute inset-0 w-1/2 overflow-hidden">
              <Cat
                className={`${getSizeClass()} ${colorClass} fill-current`}
                strokeWidth={0}
              />
            </div>
          )}
        </div>
      );
    }
    return cats;
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-1">
        {displayCats()}
        {showNumeric && (
          <span className={`ml-3 font-bold ${getColorClass(rating)} ${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-base'}`}>
            {rating}/9
          </span>
        )}
      </div>
      {showLabel && (
        <span className={`mt-1 font-medium ${getColorClass(rating)} ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          {getLabelText(rating)}
        </span>
      )}
    </div>
  );
};

export default NineLivesRating;
