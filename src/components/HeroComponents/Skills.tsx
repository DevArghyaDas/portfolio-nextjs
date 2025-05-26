import { chartArrey, chartData } from "@/lib/chartData";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SkillCard from "../ui/skills/SkillCard";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="p-2"
      >
        <h1 className="py-6 text-center text-3xl">Skills</h1>

        <Card className="bg-background/20 relative backdrop-blur-xs">
          <CardHeader>
            <CardTitle className="text-center text-xl">Skill Tab</CardTitle>
            <CardDescription className="text-center">
              I ensure that every line of code contributes to an engaging,
              accessible, and high-performance digital experience.Here are some
              data analytics in a bar-chart format that approximately describe
              my skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="coreconcept"
              className=""
            >
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
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                    {chartData[i].map((i) => (
                      <SkillCard
                        key={i.tropic}
                        tropic={i.tropic}
                        imgUrl={i.imgUrl}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Skills;
