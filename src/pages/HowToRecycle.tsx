import { ClipboardList, Trash2, Droplet, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const HowToRecycle = () => {
  const separationTips = [
    {
      title: "Separe por Cores",
      description: "Use lixeiras diferentes para cada tipo de material",
      items: ["Azul para papel", "Vermelho para plástico", "Verde para vidro", "Amarelo para metal"]
    },
    {
      title: "Mantenha Seco",
      description: "Materiais úmidos podem contaminar os recicláveis",
      items: ["Guarde em local seco", "Proteja da chuva", "Evite misturar com orgânicos"]
    },
    {
      title: "Não Misture",
      description: "Materiais diferentes devem ser separados",
      items: ["Não misture papel com plástico", "Separe vidros de metais", "Retire rótulos quando possível"]
    }
  ];

  const cleaningSteps = [
    {
      step: "1",
      title: "Lave os Recipientes",
      description: "Remova restos de alimentos e líquidos"
    },
    {
      step: "2",
      title: "Seque Completamente",
      description: "Deixe secar ao ar ou use um pano limpo",
      observation: "Materiais secos evitam mau cheiro e fungos"
    },
    {
      step: "3",
      title: "Remova Tampas e Rótulos",
      description: "Separe componentes de materiais diferentes"
    },
    {
      step: "4",
      title: "Amasse Quando Possível",
      description: "Economize espaço de armazenamento"
    }
  ];

  const symbols = [
    {
      symbol: "♻️",
      name: "Reciclável",
      description: "Material pode ser reciclado",
      color: "text-green-600 dark:text-green-400"
    },
    {
      symbol: "1️⃣",
      name: "PET",
      description: "Polietileno Tereftalato",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      symbol: "2️⃣",
      name: "PEAD",
      description: "Polietileno de Alta Densidade",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      symbol: "3️⃣",
      name: "PVC",
      description: "Policloreto de Vinila",
      color: "text-red-600 dark:text-red-400"
    },
    {
      symbol: "4️⃣",
      name: "PEBD",
      description: "Polietileno de Baixa Densidade",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      symbol: "5️⃣",
      name: "PP",
      description: "Polipropileno",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      symbol: "6️⃣",
      name: "PS",
      description: "Poliestireno",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      symbol: "7️⃣",
      name: "Outros",
      description: "Outros tipos de plástico",
      color: "text-gray-600 dark:text-gray-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-hero p-3">
              <ClipboardList className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Como Reciclar
            </h1>
            <p className="text-lg text-muted-foreground">
              Guia prático para reciclar corretamente em casa
            </p>
          </div>
        </section>

        {/* Tabs de Conteúdo */}
        <Tabs defaultValue="separation" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="separation">
              <Trash2 className="mr-2 h-4 w-4" />
              Separação
            </TabsTrigger>
            <TabsTrigger value="cleaning">
              <Droplet className="mr-2 h-4 w-4" />
              Limpeza
            </TabsTrigger>
            <TabsTrigger value="symbols">
              <Tag className="mr-2 h-4 w-4" />
              Símbolos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="separation" className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              {separationTips.map((tip) => (
                <Card key={tip.title} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tip.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 border-border bg-secondary/50">
              <CardHeader>
                <CardTitle>Cores das Lixeiras</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-5">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-blue-500" />
                    <p className="text-sm font-medium">Azul</p>
                    <p className="text-xs text-muted-foreground">Papel</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-red-500" />
                    <p className="text-sm font-medium">Vermelho</p>
                    <p className="text-xs text-muted-foreground">Plástico</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-green-500" />
                    <p className="text-sm font-medium">Verde</p>
                    <p className="text-xs text-muted-foreground">Vidro</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-yellow-500" />
                    <p className="text-sm font-medium">Amarelo</p>
                    <p className="text-xs text-muted-foreground">Metal</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-orange-500" />
                    <p className="text-sm font-medium">Laranja</p>
                    <p className="text-xs text-muted-foreground">Perigoso</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cleaning" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Passo a Passo da Limpeza</CardTitle>
                <CardDescription>
                  Materiais limpos são essenciais para a reciclagem eficiente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {cleaningSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-hero text-xl font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mb-2 text-sm text-muted-foreground">
                          {step.description}
                        </p>
                        {step.observation && (
                          <div className="rounded-lg bg-secondary/50 p-3">
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">Observação:</span> {step.observation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 border-border bg-secondary/50">
              <CardHeader>
                <CardTitle>⚠️ Importante</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Não é necessário desperdiçar água: uma lavagem rápida é suficiente
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Materiais muito sujos podem contaminar todo o lote de reciclagem
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Guarde em local seco até o dia da coleta
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="symbols" className="mt-6">
            <Card className="mb-6 border-border bg-card">
              <CardHeader>
                <CardTitle>Símbolos de Reciclagem</CardTitle>
                <CardDescription>
                  Aprenda a identificar os códigos nos produtos plásticos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  {symbols.map((symbol) => (
                    <Card key={symbol.name} className="border-border bg-secondary/50 text-center">
                      <CardHeader>
                        <div className={`text-5xl ${symbol.color}`}>
                          {symbol.symbol}
                        </div>
                        <CardTitle className="text-lg">{symbol.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">
                          {symbol.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle>💡 Dica Importante</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">
                  Nem todos os plásticos são recicláveis da mesma forma. Os números 1, 2 e 5 são 
                  os mais facilmente recicláveis. Evite produtos com os códigos 3, 6 e 7 quando possível, 
                  pois são mais difíceis de reciclar e podem ser prejudiciais ao meio ambiente.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default HowToRecycle;
