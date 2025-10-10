import { Recycle, Leaf, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const AboutRecycling = () => {
  const materials = [
    {
      name: "Plástico",
      icon: "🔵",
      description: "Garrafas PET, embalagens, sacolas",
      color: "bg-blue-100 dark:bg-blue-950 border-blue-300 dark:border-blue-800"
    },
    {
      name: "Papel",
      icon: "📄",
      description: "Jornais, revistas, caixas de papelão",
      color: "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700"
    },
    {
      name: "Vidro",
      icon: "🟢",
      description: "Garrafas, potes, frascos",
      color: "bg-green-100 dark:bg-green-950 border-green-300 dark:border-green-800"
    },
    {
      name: "Metal",
      icon: "🟡",
      description: "Latas de alumínio, enlatados",
      color: "bg-yellow-100 dark:bg-yellow-950 border-yellow-300 dark:border-yellow-800"
    },
    {
      name: "Eletrônicos",
      icon: "⚡",
      description: "Celulares, computadores, pilhas",
      color: "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800"
    }
  ];

  const process = [
    { step: 1, title: "Coleta", description: "Materiais são coletados de pontos de reciclagem" },
    { step: 2, title: "Separação", description: "Triagem por tipo de material" },
    { step: 3, title: "Limpeza", description: "Remoção de impurezas e contaminantes" },
    { step: 4, title: "Processamento", description: "Transformação em matéria-prima" },
    { step: 5, title: "Manufatura", description: "Produção de novos produtos" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-hero p-3">
              <Recycle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Sobre a Reciclagem
            </h1>
            <p className="text-lg text-muted-foreground">
              Entenda o processo de reciclagem e sua importância para o meio ambiente
            </p>
          </div>
        </section>

        {/* O que é Reciclagem */}
        <section className="mb-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                O que é Reciclagem?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Reciclagem é o processo de transformar materiais usados em novos produtos, 
                reduzindo o consumo de matéria-prima, o uso de energia e a poluição do ar e da água.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-border bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Reduz Poluição</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Diminui a quantidade de resíduos em aterros e oceanos
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Economiza Recursos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Preserva recursos naturais e reduz o consumo de energia
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Gera Empregos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cria oportunidades na indústria de reciclagem
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tipos de Materiais */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Tipos de Materiais Recicláveis
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <Card key={material.name} className={`border ${material.color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">{material.icon}</span>
                    {material.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{material.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Processo de Reciclagem */}
        <section className="mb-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Processo de Reciclagem Passo a Passo
              </CardTitle>
              <CardDescription>
                Como os materiais são transformados em novos produtos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-hero text-lg font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      {index < process.length - 1 && (
                        <div className="ml-5 mt-4 h-8 w-px bg-border" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Estatísticas */}
        <section className="mb-12">
          <Card className="border-border bg-gradient-hero text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                Impacto da Reciclagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <p className="mb-2 text-4xl font-bold">90%</p>
                  <p className="text-sm opacity-90">Redução no consumo de água</p>
                </div>
                <div className="text-center">
                  <p className="mb-2 text-4xl font-bold">70%</p>
                  <p className="text-sm opacity-90">Economia de energia</p>
                </div>
                <div className="text-center">
                  <p className="mb-2 text-4xl font-bold">95%</p>
                  <p className="text-sm opacity-90">Menos poluição do ar</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AboutRecycling;
