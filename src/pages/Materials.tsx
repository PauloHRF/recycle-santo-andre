import { Leaf, Clock, RefreshCw, CheckCircle, XCircle, Package, FileText, Wine, Wrench, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";

const Materials = () => {
  const materials = [
    {
      id: "plastic",
      name: "Plástico",
      icon: Package,
      color: "bg-blue-100 dark:bg-blue-950 border-blue-300 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-400",
      identification: [
        "Garrafas PET (refrigerantes, água)",
        "Embalagens de produtos de limpeza",
        "Sacolas plásticas",
        "Potes e recipientes",
        "Brinquedos"
      ],
      decomposition: "Mais de 400 anos",
      process: "O plástico é triturado, lavado, derretido e transformado em pellets que serão usados para fabricar novos produtos como garrafas, embalagens, móveis e até roupas.",
      canRecycle: [
        "Garrafas PET",
        "Embalagens de produtos",
        "Tampas de garrafas",
        "Potes de margarina",
        "Sacos e sacolas limpas"
      ],
      cannotRecycle: [
        "Plástico sujo ou engordurado",
        "Adesivos e etiquetas",
        "Cabos de panela",
        "Tomadas",
        "Isopor (em muitos locais)"
      ]
    },
    {
      id: "paper",
      name: "Papel",
      icon: FileText,
      color: "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700",
      iconColor: "text-blue-500 dark:text-blue-300",
      identification: [
        "Jornais e revistas",
        "Caixas de papelão",
        "Papel de escritório",
        "Cadernos sem espiral",
        "Envelopes"
      ],
      decomposition: "3 a 6 meses",
      process: "O papel é picado, misturado com água formando uma polpa, filtrado para remover impurezas e prensado para formar novas folhas de papel.",
      canRecycle: [
        "Jornais e revistas",
        "Folhas de papel",
        "Caixas de papelão",
        "Embalagens de papel",
        "Livros sem capa dura"
      ],
      cannotRecycle: [
        "Papel higiênico",
        "Guardanapos usados",
        "Papel carbono",
        "Papel metalizado",
        "Etiquetas adesivas",
        "Fotografias"
      ]
    },
    {
      id: "glass",
      name: "Vidro",
      icon: Wine,
      color: "bg-green-100 dark:bg-green-950 border-green-300 dark:border-green-800",
      iconColor: "text-green-600 dark:text-green-400",
      identification: [
        "Garrafas de bebidas",
        "Potes de alimentos",
        "Frascos de perfume",
        "Vidros de conserva",
        "Cacos de vidro"
      ],
      decomposition: "Mais de 4.000 anos",
      process: "O vidro é triturado, derretido em altas temperaturas (cerca de 1.500°C) e moldado para criar novos produtos. Pode ser reciclado infinitas vezes sem perder qualidade.",
      canRecycle: [
        "Garrafas de bebidas",
        "Potes de conserva",
        "Frascos de remédios",
        "Copos e taças",
        "Cacos de vidro"
      ],
      cannotRecycle: [
        "Espelhos",
        "Vidros temperados",
        "Lâmpadas",
        "Cristal",
        "Vidro de janela",
        "Pirex"
      ]
    },
    {
      id: "metal",
      name: "Metal",
      icon: Wrench,
      color: "bg-yellow-100 dark:bg-yellow-950 border-yellow-300 dark:border-yellow-800",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      identification: [
        "Latas de alumínio",
        "Latas de conserva",
        "Tampas de metal",
        "Arames",
        "Ferragens"
      ],
      decomposition: "Mais de 100 anos",
      process: "Os metais são separados por tipo, triturados, derretidos e transformados em lingotes que serão usados para fabricar novos produtos. A reciclagem economiza até 95% da energia.",
      canRecycle: [
        "Latas de alumínio",
        "Latas de aço",
        "Tampas de metal",
        "Panelas velhas",
        "Ferragens",
        "Fios de cobre"
      ],
      cannotRecycle: [
        "Clipes",
        "Grampos",
        "Esponjas de aço",
        "Latas de tinta ou veneno",
        "Pilhas e baterias (reciclagem específica)"
      ]
    },
    {
      id: "electronics",
      name: "Eletrônicos",
      icon: Cpu,
      color: "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800",
      iconColor: "text-purple-600 dark:text-purple-400",
      identification: [
        "Celulares e tablets",
        "Computadores e notebooks",
        "TVs e monitores",
        "Pilhas e baterias",
        "Eletrodomésticos pequenos"
      ],
      decomposition: "De 500 a 1.000 anos",
      process: "Os eletrônicos são desmontados manualmente, os componentes são separados (plástico, metal, vidro), materiais valiosos como ouro e cobre são extraídos, e materiais tóxicos são descartados adequadamente.",
      canRecycle: [
        "Celulares e acessórios",
        "Computadores e periféricos",
        "TVs e monitores",
        "Pilhas e baterias",
        "Cabos e fios",
        "Eletrodomésticos"
      ],
      cannotRecycle: [
        "Equipamentos com vazamento de substâncias",
        "Itens com materiais radioativos (consulte especialista)"
      ]
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
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Materiais Recicláveis
            </h1>
            <p className="text-lg text-muted-foreground">
              Guia completo sobre cada tipo de material reciclável
            </p>
          </div>
        </section>

        {/* Materials Grid */}
        <section className="mb-8">
          <div className="grid gap-4 md:grid-cols-5">
            {materials.map((material) => {
              const IconComponent = material.icon;
              return (
                <a
                  key={material.id}
                  href={`#${material.id}`}
                  className="group"
                >
                  <Card className={`border transition-all hover:scale-105 ${material.color}`}>
                    <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className={`rounded-lg bg-background p-3 ${material.iconColor}`}>
                        <IconComponent className="h-10 w-10" />
                      </div>
                      <p className="text-center font-semibold">{material.name}</p>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>

        {/* Materials Details */}
        <section className="space-y-8">
          {materials.map((material) => {
            const IconComponent = material.icon;
            return (
              <Card key={material.id} id={material.id} className="border-border bg-card scroll-mt-20">
                <CardHeader className={`border-b ${material.color}`}>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className={`rounded-lg bg-background p-3 ${material.iconColor}`}>
                      <IconComponent className="h-10 w-10" />
                    </div>
                    {material.name}
                  </CardTitle>
                </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {/* Identificação */}
                  <AccordionItem value="identification">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-primary" />
                        Como Identificar
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {material.identification.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Tempo de Decomposição */}
                  <AccordionItem value="decomposition">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Tempo de Decomposição
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="rounded-lg bg-secondary/50 p-4">
                        <p className="text-2xl font-bold text-foreground">{material.decomposition}</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Tempo que o material leva para se degradar naturalmente no meio ambiente.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Como é Reciclado */}
                  <AccordionItem value="process">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-5 w-5 text-primary" />
                        Como é Reciclado
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pt-2 text-muted-foreground">{material.process}</p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* O que Pode */}
                  <AccordionItem value="can">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        O que Pode Reciclar
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {material.canRecycle.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* O que Não Pode */}
                  <AccordionItem value="cannot">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        O que NÃO Pode Reciclar
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {material.cannotRecycle.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600 dark:text-red-400" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            );
          })}
        </section>

        {/* CTA */}
        <section className="mt-12">
          <Card className="border-border bg-gradient-hero text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Faça sua parte! 🌍</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Cada material reciclado faz diferença para o planeta
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
              >
                Encontrar Pontos de Coleta
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Materials;
