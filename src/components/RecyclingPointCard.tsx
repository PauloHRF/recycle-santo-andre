import { RecyclingPoint, MaterialType } from "@/types/recycling";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Trash2, Wine, FileText, Cpu, Wrench, Navigation } from "lucide-react";

interface RecyclingPointCardProps {
  point: RecyclingPoint;
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

const RecyclingPointCard = ({ point }: RecyclingPointCardProps) => {
  const getGoogleMapsUrl = (lat: number, lng: number, name: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(name)}`;
  };

  return (
    <Card className="hover:shadow-hover transition-all duration-300 bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-start justify-between">
          <span>{point.name}</span>
          <Badge variant="secondary" className="ml-2 shrink-0">
            {point.neighborhood}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
          <span>{point.address}</span>
        </div>
        
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
          <span>{point.hours}</span>
        </div>
        
        {point.phone && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <span>{point.phone}</span>
          </div>
        )}
        
        <div className="pt-2 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground mb-2">Materiais aceitos:</p>
          <div className="flex flex-wrap gap-2">
            {point.materials.map((material) => {
              const Icon = materialIcons[material];
              return (
                <Badge key={material} variant="outline" className="gap-1">
                  <Icon className="h-3 w-3" />
                  {materialLabels[material]}
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          asChild 
          variant="outline" 
          className="w-full gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <a 
            href={getGoogleMapsUrl(point.lat, point.lng, point.name)} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Navigation className="h-4 w-4" />
            Ver rotas no Google Maps
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecyclingPointCard;
