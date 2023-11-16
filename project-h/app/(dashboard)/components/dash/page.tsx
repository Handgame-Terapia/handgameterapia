"use client";

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  AreaChart,
} from "@tremor/react";
      
const chartdata = [
  {
    date: "Jan 29",
    Polegar: 10,
    Indicador: 7,
    Médio: 9,
    Anelar: 8,
    Minimo: 10,
  },
  {
    date: "Fev 05",
    Polegar: 22,
    Indicador: 23,
    Médio: 21,
    Anelar: 25,
    Minimo: 29,
  },
  {
    date: "Fev 12",
    Polegar: 37,
    Indicador: 31,
    Médio: 36,
    Anelar: 34,
    Minimo: 39,
  },
  {
    date: "Fev 19",
    Polegar: 48,
    Indicador: 44,
    Médio: 47,
    Anelar: 43,
    Minimo: 41,
  },
  {
    date: "Fev 26",
    Polegar: 55,
    Indicador: 51,
    Médio: 53,
    Anelar: 57,
    Minimo: 58,
  },
  {
    date: "Fev 05",
    Polegar: 66,
    Indicador: 66,
    Médio: 55,
    Anelar: 60,
    Minimo: 54,
  },
];

export default function DashboardExample() {
  return (
    <main className="px-20 pt-10 bg-black">
      <Title>Dashboard</Title>
      <Text>Informação da evolução do cliente.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detalhado</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="h-screen">
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28">
                  Melhor Pontuação:<br/>
                  <p className="text-4xl text-center pt-5">66</p>
                </div>
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28">
                  última Sessão:<br/>
                  <p className="text-4xl text-center pt-5">05 de Fevereiro</p>
                </div>
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28">
                  Horas Trabalhadas:<br/>
                  <p className="text-4xl text-center pt-5">6 Horas</p>
                </div>
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <Title>Desempenho</Title>
                <AreaChart
                  className="h-72 mt-4"
                  data={chartdata}
                  index="date"
                  categories={["Polegar", "Indicador", "Médio", "Anelar", "Minímo"]}
                  colors={["neutral", "indigo", "rose", "orange", "emerald"]}
                />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>

          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}