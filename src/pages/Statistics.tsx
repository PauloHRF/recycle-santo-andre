import { BarChart3, TrendingUp, Users, MapPin, Leaf, Target, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "@/components/Header";

const Statistics = () => {
  const mainMetrics = [
    { label: "RSU Gerados (2023)", value: "81 milhões ton", icon: TrendingUp, color: "text-primary" },
    { label: "Empregos no Setor", value: "386 mil+", icon: Users, color: "text-green-600" },
    { label: "Taxa de Coleta", value: "93,4%", icon: MapPin, color: "text-blue-600" },
    { label: "Material Reciclado", value: "6,7 milhões ton", icon: Leaf, color: "text-emerald-600" }
  ];

  const monthlyData = [
    { month: 'Jan', toneladas: 6650 },
    { month: 'Fev', toneladas: 6500 },
    { month: 'Mar', toneladas: 6700 },
    { month: 'Abr', toneladas: 6600 },
    { month: 'Mai', toneladas: 6750 },
    { month: 'Jun', toneladas: 6650 },
    { month: 'Jul', toneladas: 6800 },
    { month: 'Ago', toneladas: 6850 },
    { month: 'Set', toneladas: 6700 },
    { month: 'Out', toneladas: 6900 },
    { month: 'Nov', toneladas: 6950 },
    { month: 'Dez', toneladas: 7100 }
  ];

  const materialDistribution = [
    { name: 'Orgânico', value: 45, color: '#22c55e' },
    { name: 'Plástico', value: 17, color: '#ef4444' },
    { name: 'Papel/Papelão', value: 13, color: '#3b82f6' },
    { name: 'Rejeitos', value: 14, color: '#64748b' },
    { name: 'Vidro', value: 2, color: '#06b6d4' },
    { name: 'Metais', value: 3, color: '#eab308' },
    { name: 'Outros', value: 6, color: '#a855f7' }
  ];

  const yearlyComparison = [
    { year: '2021', toneladas: 76.1 },
    { year: '2022', toneladas: 78.3 },
    { year: '2023', toneladas: 81.0 }
  ];

  const goals = [
    {
      title: "Reciclagem de Materiais Secos",
      description: "Meta: alcançar 30% de reciclagem até 2030",
      progress: 28,
      icon: Target
    },
    {
      title: "Disposição Adequada",
      description: "Meta: 100% de RSU em aterros sanitários",
      progress: 59,
      icon: Leaf
    },
    {
      title: "Coleta Seletiva Universal",
      description: "Meta: 100% dos municípios com coleta seletiva",
      progress: 45,
      icon: GraduationCap
    }
  ];

  const environmentalImpact = [
    { label: "Empregos Diretos", value: "360 mil", icon: "👷" },
    { label: "Catadores Autônomos", value: "700 mil+", icon: "♻️" },
    { label: "Municípios Atendidos", value: "5.570", icon: "🏙️" },
    { label: "Composto Produzido (ton)", value: "85.500", icon: "🌱" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-hero p-3">
              <BarChart3 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Panorama dos Resíduos Sólidos no Brasil
            </h1>
            <p className="text-lg text-muted-foreground">
              Dados oficiais de 2023 sobre geração, coleta e reciclagem de RSU no Brasil
            </p>
          </div>
        </section>

        {/* Main Metrics */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.label} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`h-8 w-8 ${metric.color}`} />
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Monthly Evolution Chart */}
        <section className="mb-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Geração Mensal de RSU no Brasil (2023)
              </CardTitle>
              <CardDescription>Estimativa de RSU gerado por mês (milhares de toneladas)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Mil toneladas', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value.toLocaleString('pt-BR')} mil ton`, 'Geração']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="toneladas" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Toneladas"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Material Distribution & Yearly Comparison */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Composição Gravimétrica dos RSU</CardTitle>
              <CardDescription>Composição dos resíduos sólidos urbanos no Brasil (%)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={materialDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {materialDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Evolução da Geração de RSU</CardTitle>
              <CardDescription>Geração total de RSU no Brasil (milhões de toneladas)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearlyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Milhões de toneladas', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value.toFixed(1)} milhões ton`, 'Geração']}
                  />
                  <Bar dataKey="toneladas" fill="hsl(var(--primary))" name="Geração de RSU" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Goals and Objectives */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Metas da Política Nacional de Resíduos Sólidos
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <Card key={goal.title} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-bold text-foreground">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground text-center">
            Dados Socioeconômicos do Setor
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Impacto social e econômico da gestão de RSU no Brasil em 2023
          </p>
          <Card className="border-border bg-gradient-hero text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Setor de Resíduos Sólidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-4">
                {environmentalImpact.map((impact) => (
                  <div key={impact.label} className="text-center">
                    <div className="mb-2 text-5xl">{impact.icon}</div>
                    <p className="mb-2 text-3xl font-bold">{impact.value}</p>
                    <p className="text-sm opacity-90">{impact.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section>
          <Card className="border-primary/50 bg-gradient-to-r from-primary/10 to-blue-500/10">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 text-3xl font-bold">O Desafio da Reciclagem no Brasil</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Apenas <strong className="text-foreground">8,3%</strong> dos resíduos gerados são reciclados, mas o potencial brasileiro é de <strong className="text-foreground">33,6%</strong>!
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Encontre o ecoponto mais próximo em Santo André e faça parte da mudança.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MapPin className="h-5 w-5" />
                Encontrar Ecopontos em Santo André
              </button>
            </CardContent>
          </Card>
          
          <Card className="mt-6 bg-muted/50">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">Fonte dos dados:</strong> Panorama dos Resíduos Sólidos no Brasil 2024
              </p>
              <p className="text-sm text-muted-foreground">
                Publicado pela ABREMA - Associação Brasileira de Resíduos e Meio Ambiente
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Statistics;
