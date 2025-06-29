
import { Cat } from "lucide-react";

interface NineLivesRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const NineLivesRating = ({ rating, size = "md", showLabel = false }: NineLivesRatingProps) => {
  const getColorClass = (lives: number) => {
    if (lives === 9) return "text-yellow-500"; // Gold
    if (lives >= 7) return "text-green-500"; // Green
    if (lives >= 4) return "text-orange-500"; // Orange
    return "text-red-500"; // Red
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm": return "w-4 h-4";
      case "lg": return "w-8 h-8";
      default: return "w-6 h-6";
    }
  };

  const getLabelText = (lives: number) => {
    if (lives === 9) return "9 Lives Certified";
    if (lives >= 7) return "Excellent Choice";
    if (lives >= 4) return "Good Option";
    return "Consider Alternatives";
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 9 }, (_, index) => {
          const catNumber = index + 1;
          const isFilled = catNumber <= rating;
          const colorClass = isFilled ? getColorClass(rating) : "text-gray-300";
          
          return (
            <Cat
              key={catNumber}
              className={`${getSizeClass()} ${colorClass} ${isFilled ? 'fill-current' : ''}`}
              strokeWidth={isFilled ? 0 : 2}
            />
          );
        })}
        <span className={`ml-2 font-bold ${getColorClass(rating)} ${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-base'}`}>
          {rating}/9
        </span>
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
