
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface ProductFiltersProps {
  showEightPlusOnly: boolean;
  showNineLivesOnly: boolean;
  onEightPlusChange: (checked: boolean) => void;
  onNineLivesChange: (checked: boolean) => void;
}

const ProductFilters = ({ 
  showEightPlusOnly, 
  showNineLivesOnly, 
  onEightPlusChange, 
  onNineLivesChange 
}: ProductFiltersProps) => {
  return (
    <Card className="p-6 mb-8">
      <h3 className="text-lg font-semibold text-navy-800 mb-4">Filter Products 🎯</h3>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex items-center space-x-3">
          <Switch
            id="eight-plus"
            checked={showEightPlusOnly}
            onCheckedChange={onEightPlusChange}
          />
          <Label htmlFor="eight-plus" className="text-navy-700 font-medium">
            8+ Lives Only (Excellent Products) ⭐
          </Label>
        </div>
        <div className="flex items-center space-x-3">
          <Switch
            id="nine-lives"
            checked={showNineLivesOnly}
            onCheckedChange={onNineLivesChange}
          />
          <Label htmlFor="nine-lives" className="text-navy-700 font-medium">
            9 Lives Certified Only (Perfect Score) 🏆
          </Label>
        </div>
      </div>
    </Card>
  );
};

export default ProductFilters;
