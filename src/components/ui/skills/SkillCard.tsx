"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import Image from "next/image";

const SkillCard = ({ imgUrl, tropic }: { tropic: string; imgUrl: string }) => {
  return (
    <>
      <MagicCard className="rounded-lg p-2">
        <Card className="relative border-1">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent className="group flex max-h-max min-h-40 w-full items-center justify-center">
            <Image
              height={64}
              width={64}
              alt=""
              className="h-20 w-20 group-hover:blur-sm"
              src={imgUrl}
            ></Image>
            <div className="absolute hidden h-full w-full place-items-center font-semibold group-hover:grid">
              {tropic}
            </div>
          </CardContent>
        </Card>
      </MagicCard>
    </>
  );
};

export default SkillCard;
