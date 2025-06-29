
import { Cat, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NineLivesBadgeProps {
  size?: "sm" | "md" | "lg";
}

const NineLivesBadge = ({ size = "md" }: NineLivesBadgeProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm": return "px-2 py-1 text-xs";
      case "lg": return "px-4 py-2 text-base";
      default: return "px-3 py-1.5 text-sm";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "sm": return "w-3 h-3";
      case "lg": return "w-5 h-5";
      default: return "w-4 h-4";
    }
  };

  return (
    <Badge 
      className={`bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 font-bold ${getSizeClasses()} border-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <Award className={`${getIconSize()} mr-1 fill-current`} />
      <Cat className={`${getIconSize()} mr-1 fill-current`} />
      9 Lives Certified
    </Badge>
  );
};

export default NineLivesBadge;
