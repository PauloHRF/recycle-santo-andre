import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import RecyclingPointCard from "@/components/RecyclingPointCard";
import { recyclingPoints } from "@/data/recyclingPoints";
import { MaterialType } from "@/types/recycling";

const Index = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<MaterialType[]>([]);

  const handleToggleMaterial = (material: MaterialType) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const filteredPoints = selectedMaterials.length === 0
    ? recyclingPoints
    : recyclingPoints.filter((point) =>
        selectedMaterials.some((material) => point.materials.includes(material))
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container px-4 py-12 md:px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Encontre um Ponto de Reciclagem
            </h2>
            <p className="text-muted-foreground">
              Temos {filteredPoints.length} pontos de coleta disponíveis
              {selectedMaterials.length > 0 && " com os materiais selecionados"}
            </p>
          </div>

          <FilterBar
            selectedMaterials={selectedMaterials}
            onToggleMaterial={handleToggleMaterial}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPoints.map((point) => (
              <RecyclingPointCard key={point.id} point={point} />
            ))}
          </div>

          {filteredPoints.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum ponto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container px-4 py-8 md:px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>EcoSanto André - Contribua para um futuro mais sustentável</p>
            <p className="mt-2">
              © 2025 - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
