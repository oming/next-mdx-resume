import EtcMdx from "@/content/etc.mdx";

import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";

export default function Etc() {
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
