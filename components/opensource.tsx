import dynamic from "next/dynamic";

import { compareDesc } from "date-fns";

import { getAllOpenSource } from "@/lib/mdx";
import { parseDate } from "@/lib/utils";

import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";
import { H3 } from "@/components/ui/typography";

export default async function OpenSource() {
  const allOpenSource = await getAllOpenSource();
  // startDate 기준으로 정렬
  const sortedData = allOpenSource.sort((a, b) =>
    compareDesc(
      parseDate(a.metadata.startDate),
      parseDate(b.metadata.startDate),
    ),
  );

  return (
    <ComponentWrapper
      // className="break-before-page break-inside-avoid"
      name={"OPEN SOURCE"}
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
  metadata: OpenSourceMetadata;
}) {
  // 동적으로 MDX 파일을 불러오기
  const MdxComponent = dynamic(
    () => import(`@/content/opensource/${fileName}.mdx`),
  );

  const { project, link } = metadata;

  return (
    <div className="flex break-inside-avoid flex-col py-3 lg:flex-row">
      <div className="flex w-full shrink-0 items-start gap-2 lg:w-64 lg:flex-col">
        <H3 className="text-muted-foreground print:text-base">{project}</H3>
      </div>
      <div className="flex w-full flex-col gap-2">
        <TypographyWrapper>
          <MdxComponent />
        </TypographyWrapper>
      </div>
    </div>
  );
}
