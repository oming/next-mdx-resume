import SkillMdx, { metadata } from "@/content/skill.mdx";

import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";

export default function Skill() {
  if (metadata.hidden) return;

  return (
    <ComponentWrapper
      // className="break-before-page break-inside-avoid"
      name={"SKILL"}
      // badge={
      //   <Badge variant="outline">
      //     <CheckIcon />
      //     100%
      //   </Badge>
      // }
      // badgeRight
    >
      <TypographyWrapper className="w-full">
        <SkillMdx />
      </TypographyWrapper>
    </ComponentWrapper>
  );
}
