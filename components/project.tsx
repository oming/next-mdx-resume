import dynamic from "next/dynamic";

import { ContainerIcon, SquareTerminalIcon } from "lucide-react";

import { getAllProject } from "@/lib/mdx";
import { calculateDuration, sortByStartAndEnd } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";
import { H3, Large, Muted } from "@/components/ui/typography";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default async function Project() {
  const allProject = await getAllProject();

  // startDate 기준으로 정렬
  const sortedData = allProject.sort(sortByStartAndEnd);

  return (
    <ComponentWrapper
      // className="break-before-page"
      name={"PROJECT"}
      badge={
        <p className="text-muted-foreground text-xs print:hidden">
          구분{" "}
          <Badge variant={"outline"}>
            <ContainerIcon />
            SYS <sub className="hidden sm:block">(System & Infrastructure)</sub>
          </Badge>
          <Badge variant={"outline"}>
            <SquareTerminalIcon />
            DEV <sub className="hidden sm:block">(Development)</sub>
          </Badge>
        </p>
      }
      badgeRight
    >
      <div className="w-full divide-y">
        {sortedData
          .filter(({ metadata }) => !metadata.hidden)
          .map(({ fileName, metadata }) => {
            return (
              <Item key={fileName} fileName={fileName} metadata={metadata} />
            );
          })}
      </div>
    </ComponentWrapper>
  );
}

function Item({
  fileName,
  metadata,
}: {
  fileName: string;
  metadata: ProjectMetadata;
}) {
  // 동적으로 MDX 파일을 불러오기
  const MdxComponent = dynamic(
    () => import(`@/content/project/${fileName}.mdx`),
  );

  const { startDate, endDate, company, position, project, skill, type } =
    metadata;

  return (
    <div className="flex break-inside-avoid flex-col py-3 lg:flex-row">
      <div className="flex w-full shrink-0 items-center gap-2 lg:w-64 lg:flex-col">
        <Large className="text-muted-foreground print:text-sm">{`${startDate} ~ ${endDate}`}</Large>
        <Muted className="text-xs">
          ({calculateDuration(startDate, endDate)})
        </Muted>
      </div>
      <div className="flex w-full flex-col gap-2">
        <H3 className="print:text-base">{project}</H3>
        <div className="text-muted-foreground flex gap-2 text-sm italic">
          {type === "DEV" && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant={"outline"}>
                  <SquareTerminalIcon />
                  DEV
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>DEV (Development)</p>
              </TooltipContent>
            </Tooltip>
          )}
          {type === "SYS" && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant={"outline"}>
                  <ContainerIcon />
                  SYS
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>SYS (System & Infrastructure)</p>
              </TooltipContent>
            </Tooltip>
          )}
          <p className="font-semibold">{company}</p>-<p>{position}</p>
        </div>
        <TypographyWrapper>
          <MdxComponent />
        </TypographyWrapper>
        <div className="flex flex-wrap gap-0.5">
          {skill?.map((s) => {
            return (
              <Badge key={s} variant={"secondary"}>
                {s}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
