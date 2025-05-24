import { CSSProperties } from "react";
import Section from "../ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { chartArrey, chartData } from "@/lib/chartData";
import SkillCharts from "../ui/recharts/SkillCharts";

const animatedBackgroundStyle: CSSProperties = {
  position: "absolute",
  top: "0%",
  left: "0",
  width: "120%",
  height: "50%",
  zIndex: -1,
  transform: "rotate(-20deg) translateX(-15%)",
  backgroundImage: 'url("/media/background-for-skill-2.png")',
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto",
  animation: "slide 90s linear infinite",
};
const animatedBackgroundStyleR: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "0",
  width: "120%",
  height: "50%",
  zIndex: -1,
  transform: "rotate(-20deg) translateX(-10%)",
  backgroundImage: 'url("/media/bgackground-for-skill-3.png")',
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto",
  animation: "slide2 90s linear infinite",
};
const AnimateBg = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <div style={animatedBackgroundStyle} />
        <div style={animatedBackgroundStyleR} />
      </div>
    </>
  );
};
const Skills = () => {
  return (
    <>
      <Section
        sectionName="skills"
        className={"p-2"}
      >
        <AnimateBg />

        <Card className="bg-background/20 rounded-none backdrop-blur-xs">
          <CardHeader>
            <CardTitle className="text-center text-xl">Skill Charts</CardTitle>
            <CardDescription className="text-center">
              I ensure that every line of code contributes to an engaging,
              accessible, and high-performance digital experience.Here are some
              data analytics in a bar-chart format that approximately describe
              my skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="coreconcept">
              <TabsList className="w-full gap-2 *:cursor-pointer *:capitalize">
                {chartArrey.map((i) => (
                  <TabsTrigger
                    key={i}
                    value={i}
                    className="dark:data-[state=active]:bg-background border-b-2 text-lg"
                  >
                    {i}
                  </TabsTrigger>
                ))}
              </TabsList>

              {chartArrey.map((i) => (
                <TabsContent
                  key={i}
                  value={i}
                >
                  <SkillCharts data={chartData[i]} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </Section>
    </>
  );
};

export default Skills;
