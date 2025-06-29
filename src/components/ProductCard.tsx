
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NineLivesRating from "./NineLivesRating";
import NineLivesBadge from "./NineLivesBadge";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  description: string;
  isPerfect?: boolean;
}

const ProductCard = ({ name, category, rating, price, image, description, isPerfect = false }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="relative">
        <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {isPerfect && (
          <div className="absolute top-2 right-2">
            <NineLivesBadge size="sm" />
          </div>
        )}
        <div className="space-y-1">
          <p className="text-sm text-gray-600 font-medium">{category}</p>
          <h3 className="font-bold text-lg text-navy-800 leading-tight">{name}</h3>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="space-y-3">
          <NineLivesRating rating={rating} showLabel />
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <span className="text-2xl font-bold text-navy-800">{price}</span>
        <Button 
          size="sm" 
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          View Details
          <ExternalLink className="w-4 h-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
