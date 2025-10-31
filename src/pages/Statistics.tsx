import { BarChart3, TrendingUp, Users, MapPin, Leaf, Target, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "@/components/Header";

const Statistics = () => {
  const mainMetrics = [
    { label: "Toneladas Recicladas (2024)", value: "12.500", icon: TrendingUp, color: "text-primary" },
    { label: "Famílias Atendidas", value: "450.000+", icon: Users, color: "text-green-600" },
    { label: "Ecopontos Ativos", value: "30", icon: MapPin, color: "text-blue-600" },
    { label: "CO₂ Evitado (ton)", value: "8.300", icon: Leaf, color: "text-emerald-600" }
  ];

  const monthlyData = [
    { month: 'Jan', toneladas: 980 },
    { month: 'Fev', toneladas: 1050 },
    { month: 'Mar', toneladas: 1120 },
    { month: 'Abr', toneladas: 1080 },
    { month: 'Mai', toneladas: 1150 },
    { month: 'Jun', toneladas: 1200 },
    { month: 'Jul', toneladas: 1100 },
    { month: 'Ago', toneladas: 1180 },
    { month: 'Set', toneladas: 1250 },
    { month: 'Out', toneladas: 1300 },
    { month: 'Nov', toneladas: 1350 },
    { month: 'Dez', toneladas: 1400 }
  ];

  const materialDistribution = [
    { name: 'Papel', value: 35, color: '#3b82f6' },
    { name: 'Plástico', value: 28, color: '#ef4444' },
    { name: 'Vidro', value: 15, color: '#22c55e' },
    { name: 'Metal', value: 12, color: '#eab308' },
    { name: 'Eletrônicos', value: 10, color: '#a855f7' }
  ];

  const yearlyComparison = [
    { year: '2022', toneladas: 9800 },
    { year: '2023', toneladas: 11200 },
    { year: '2024', toneladas: 12500 }
  ];

  const goals = [
    {
      title: "Meta 2025",
      description: "Aumentar reciclagem em 30%",
      progress: 65,
      icon: Target
    },
    {
      title: "Carbono Neutro",
      description: "Reduzir emissões em 50% até 2030",
      progress: 42,
      icon: Leaf
    },
    {
      title: "Educação Ambiental",
      description: "Alcançar 100 escolas até 2026",
      progress: 78,
      icon: GraduationCap
    }
  ];

  const environmentalImpact = [
    { label: "Árvores Salvas", value: "15.000+", icon: "🌳" },
    { label: "Água Economizada (L)", value: "2.5M", icon: "💧" },
    { label: "Energia Preservada (kWh)", value: "180K", icon: "⚡" },
    { label: "Empregos Gerados", value: "250+", icon: "👷" }
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
              Impacto da Reciclagem em Santo André
            </h1>
            <p className="text-lg text-muted-foreground">
              Dados e estatísticas sobre a reciclagem na cidade
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
                Evolução Mensal da Reciclagem (2024)
              </CardTitle>
              <CardDescription>Toneladas de material reciclado por mês</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
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
              <CardTitle>Reciclagem por Material</CardTitle>
              <CardDescription>Distribuição percentual por tipo</CardDescription>
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
              <CardTitle>Comparativo Anual</CardTitle>
              <CardDescription>Evolução dos últimos 3 anos</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearlyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="toneladas" fill="hsl(var(--primary))" name="Toneladas" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Goals and Objectives */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Metas e Objetivos
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
          <Card className="border-border bg-gradient-hero text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Impacto Ambiental</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Resultados concretos das ações de reciclagem
              </CardDescription>
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
          <Card className="border-border bg-card text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Faça Parte Dessa Mudança! 🌱</CardTitle>
              <CardDescription>
                Cada ação individual contribui para esses números
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Encontrar Ecopontos Próximos
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Statistics;
