import { HelpCircle, Lightbulb, Droplet, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Materiais Especiais",
      icon: Lightbulb,
      color: "text-yellow-600",
      questions: [
        {
          question: "O que fazer com lâmpadas?",
          answer: "Lâmpadas fluorescentes contêm mercúrio e devem ser levadas a pontos de coleta especializados. Em Santo André, leve ao ecoponto mais próximo ou ao Atrium Shopping que aceita eletrônicos. Lâmpadas LED e incandescentes podem ser descartadas no lixo comum, mas preferencialmente em ecopontos."
        },
        {
          question: "Como descartar óleo de cozinha?",
          answer: "Nunca jogue óleo de cozinha na pia! Espere esfriar, coloque em garrafa PET bem fechada e leve a um ponto de coleta específico. Em Santo André, alguns ecopontos recebem óleo de cozinha. O óleo reciclado vira biodiesel e sabão."
        },
        {
          question: "Posso reciclar embalagens metalizadas?",
          answer: "Embalagens metalizadas (como pacotes de salgadinhos e biscoitos) geralmente NÃO são recicláveis porque misturam plástico com alumínio. Porém, existem programas especiais como o TerraCycle que aceitam esses materiais. Sempre prefira embalagens simples."
        }
      ]
    },
    {
      category: "Preparação dos Materiais",
      icon: Droplet,
      color: "text-blue-600",
      questions: [
        {
          question: "Como limpar recicláveis sem desperdiçar água?",
          answer: "Use a água da última enxaguada da louça ou do banho. Uma lavagem rápida é suficiente - não precisa estar impecável. Remova restos grandes de comida com papel ou guardanapo antes. Se estiver muito sujo, descarte no lixo comum."
        },
        {
          question: "Preciso remover rótulos das embalagens?",
          answer: "Não é obrigatório, mas ajuda. Os rótulos de papel em garrafas PET podem permanecer. Porém, remova rótulos plásticos de vidros quando possível. O importante é limpar bem a embalagem."
        }
      ]
    },
    {
      category: "Dúvidas Comuns",
      icon: HelpCircle,
      color: "text-primary",
      questions: [
        {
          question: "Papel sujo pode ser reciclado?",
          answer: "NÃO. Papel com restos de comida, gordura ou muito úmido contamina todo o lote de reciclagem. Papel sujo deve ir para o lixo orgânico ou compostagem."
        },
        {
          question: "Caixas de pizza podem ser recicladas?",
          answer: "Depende. A parte limpa da caixa pode ser reciclada. A parte com gordura deve ir para o lixo orgânico. Rasgue e separe as partes."
        },
        {
          question: "Isopor é reciclável?",
          answer: "Sim, mas nem todos os pontos aceitam. O isopor (EPS) pode ser reciclado, mas o processo é caro. Alguns ecopontos em Santo André aceitam. Reduza o uso sempre que possível."
        },
        {
          question: "Preciso separar tampas das garrafas?",
          answer: "Sim, é recomendado. Tampas de plástico e garrafas PET são tipos diferentes de plástico. Separe e recicle ambos."
        }
      ]
    },
    {
      category: "Descarte Específico",
      icon: Trash2,
      color: "text-red-600",
      questions: [
        {
          question: "Onde descartar pilhas e baterias?",
          answer: "Pilhas e baterias contêm metais pesados perigosos. Leve aos ecopontos de Santo André que aceitam materiais eletrônicos ou a estabelecimentos comerciais que tenham coletores específicos (supermercados, farmácias, lojas de eletrônicos)."
        },
        {
          question: "Como descartar medicamentos vencidos?",
          answer: "Nunca jogue no lixo comum ou vaso sanitário! Leve medicamentos vencidos às farmácias participantes do programa 'Descarte Consciente' ou a postos de saúde."
        },
        {
          question: "O que fazer com roupas velhas?",
          answer: "Roupas em bom estado podem ser doadas. Roupas muito desgastadas podem virar panos de limpeza ou serem levadas a pontos de reciclagem têxtil. Algumas ONGs em Santo André aceitam tecidos."
        },
        {
          question: "Como descartar móveis e eletrônicos grandes?",
          answer: "Entre em contato com a Prefeitura de Santo André para agendar coleta de móveis e eletrônicos grandes. Não deixe na calçada sem aviso prévio."
        }
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
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre reciclagem e descarte correto
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="space-y-8">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.category} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className={`rounded-full bg-secondary p-2 ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed pt-2">
                            {item.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Additional Help */}
        <section className="mt-12">
          <Card className="border-border bg-gradient-hero text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Não encontrou sua resposta?</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Entre em contato com a Prefeitura de Santo André
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-sm opacity-90">
                  📞 Telefone: 0800 019 6688
                </p>
                <p className="text-sm opacity-90">
                  📧 Email: semasa@santoandre.sp.gov.br
                </p>
                <p className="text-sm opacity-90">
                  🕐 Horário: Segunda a Sexta, 8h às 17h
                </p>
              </div>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90 mt-4"
              >
                Ver Pontos de Coleta
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default FAQ;
