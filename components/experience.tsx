import dynamic from "next/dynamic";
import Link from "next/link";

import { getAllExperience } from "@/lib/mdx";
import { calculateDuration, sortByStartAndEnd } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";
import { H3, Large } from "@/components/ui/typography";

export default async function Experience() {
  const allExperience = await getAllExperience();
  // startDate 기준으로 정렬
  const sortedData = allExperience.sort(sortByStartAndEnd);

  const duration = calculateDuration(
    sortedData[sortedData.length - 1].metadata.startDate,
    sortedData[0].metadata.endDate,
  );

  return (
    <ComponentWrapper
      // className="break-before-page"
      name={"EXPERIENCE"}
      badge={<Badge>{duration}</Badge>}
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
  metadata: ExperienceMetadata;
}) {
  // 동적으로 MDX 파일을 불러오기
  const MdxComponent = dynamic(
    () => import(`@/content/experience/${fileName}.mdx`),
  );

  const { startDate, endDate, company, url, position, skill } = metadata;

  return (
    <div className="flex break-inside-avoid flex-col py-3 lg:flex-row">
      <div className="flex w-full shrink-0 items-center gap-2 lg:w-64 lg:flex-col">
        <Large className="text-muted-foreground print:text-sm">{`${startDate} ~ ${endDate ? endDate : "Now"}`}</Large>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-4">
          {url ? (
            <H3 className="print:text-base">
              <Link href={url} target="_blank">
                {company}
              </Link>
            </H3>
          ) : (
            <H3 className="print:text-base">{company}</H3>
          )}
          <Badge variant={"warning"}>
            {calculateDuration(startDate, endDate)}
          </Badge>
        </div>
        <div className="text-muted-foreground flex gap-2 text-sm italic">
          <p>{position}</p>
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
