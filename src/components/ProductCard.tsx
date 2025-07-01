
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NineLivesRating from "./NineLivesRating";
import NineLivesBadge from "./NineLivesBadge";

interface ProductCardProps {
  name: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  description: string;
  isPerfect?: boolean;
}

const ProductCard = ({ name, category, rating, price, description, isPerfect = false }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="relative p-0">
        <div className="aspect-square bg-gray-100 rounded-t-lg mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop"
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {isPerfect && (
          <div className="absolute top-3 right-3">
            <NineLivesBadge size="sm" />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="flex-1 p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-charcoal-900 leading-tight mb-2">
              {name} — <span className="text-orange-500">{rating}/9 Lives</span>
            </h3>
            <NineLivesRating rating={rating} showNumeric={false} />
          </div>
          <p className="text-charcoal-600 text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
      
      <div className="px-6 pb-6 flex justify-between items-center">
        <span className="text-xl font-bold text-charcoal-900">{price}</span>
        <Button 
          size="sm" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium"
        >
          View Product
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
