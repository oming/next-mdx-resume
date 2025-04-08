import IntroduceMdx from "@/content/introduce.mdx";

import { formatLastUpdated } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";

export default function Introduce() {
  // 커밋 시간을 기준으로 마지막 변경일 지정
  const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED;
  const formattedLastUpdated = formatLastUpdated(lastUpdated);

  return (
    <ComponentWrapper
      className=""
      name={"INTRODUCE"}
      badge={
        <p className="text-muted-foreground text-xs print:hidden">
          Latest Updated <Badge>{formattedLastUpdated}</Badge>
        </p>
      }
      badgeRight
    >
      <TypographyWrapper>
        <IntroduceMdx />
      </TypographyWrapper>
    </ComponentWrapper>
  );
}
