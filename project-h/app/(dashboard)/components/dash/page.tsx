"use client";

import {         
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  AreaChart,
  Text,
  BarChart,
  Title, } from "@tremor/react";

import getInfo from "./importing/page";
import { useEffect, useState } from "react";



const daydata = [
  {
    date: "Jan 22",
    Polegar: 4000,
    Indicador: 3400,
    Médio: 3200,
    Anelar: 3600,
    Mínimo: 4000,
  }
]

export default function FinalDashboard(){
  const [chartdata, setChartdata] = useState<any>();

  useEffect(() => {
    async function teste1(){
      const teste = await getInfo();
      setChartdata(teste);
      console.log(teste);
    } 
    teste1()
  }, [])

  return (
    <div className="bg-black text-neutral-300 p-4">
      <div className="p-4 md:px-14">
      <Title>Dashboard</Title>
      <Text>Aqui estão as informações do cliente.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Diário</Tab>
          <Tab>Detalhe</Tab>
        </TabList>
        {/*Overview*/}
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card className="rounded-lg">
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card className="rounded-lg">
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card className="rounded-lg">
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card className="rounded-lg">
                <Title className="pl-5">Desempenho</Title>
                <AreaChart
                  className="h-72 mt-4"
                  data={chartdata}
                  index="date"
                  categories={["Polegar", "Indicador", "Médio", "Anelar", "Mínimo"]}
                  colors={["neutral", "indigo", "rose", "orange", "emerald"]}
                />
              </Card>
            </div>
          </TabPanel>
          {/*Detalhe*/}
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Title>Último desempenho</Title>
                <BarChart
                  className="mt-6"
                  data={daydata}
                  index="name"
                  categories={["Polegar", "Indicador", "Médio", "Anelar", "Mínimo"]}
                  colors={["neutral", "indigo", "rose", "orange", "emerald"]}
                  yAxisWidth={48}
                />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      </div>
    </div>);
}