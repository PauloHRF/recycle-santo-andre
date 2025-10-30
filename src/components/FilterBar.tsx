import { MaterialType } from "@/types/recycling";
import { Button } from "@/components/ui/button";
import { Trash2, Wine, FileText, Cpu, Wrench } from "lucide-react";

interface FilterBarProps {
  selectedMaterials: MaterialType[];
  onToggleMaterial: (material: MaterialType) => void;
}

const materialIcons: Record<MaterialType, any> = {
  plastic: Trash2,
  glass: Wine,
  paper: FileText,
  metal: Wrench,
  electronics: Cpu,
};

const materialLabels: Record<MaterialType, string> = {
  plastic: "Plástico",
  glass: "Vidro",
  paper: "Papel",
  metal: "Metal",
  electronics: "Eletrônicos",
};

const FilterBar = ({ selectedMaterials, onToggleMaterial }: FilterBarProps) => {
  const materials: MaterialType[] = ["plastic", "glass", "paper", "metal", "electronics"];

  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
      <h3 className="text-sm font-semibold text-foreground mb-3">Filtrar por tipo de material</h3>
      <div className="flex flex-wrap gap-2">
        {materials.map((material) => {
          const Icon = materialIcons[material];
          const isSelected = selectedMaterials.includes(material);
          
          return (
            <Button
              key={material}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onToggleMaterial(material)}
              className="transition-all duration-200"
            >
              <Icon className="h-4 w-4 mr-2" />
              {materialLabels[material]}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
