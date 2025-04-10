import EtcMdx, { metadata } from "@/content/etc.mdx";

import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";

export default function Etc() {
  if (metadata.hidden) return;

  return (
    <ComponentWrapper
      // className="break-before-page break-inside-avoid"
      name={"ETC"}
    >
      <TypographyWrapper>
        <EtcMdx />
      </TypographyWrapper>
    </ComponentWrapper>
  );
}
