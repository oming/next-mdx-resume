import EducationAndCertificationsMdx, {
  metadata,
} from "@/content/education-and-certifications.mdx";

import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";

export default function EducationAndCertifications() {
  if (metadata.hidden) return;

  return (
    <ComponentWrapper
      // className="break-before-page break-inside-avoid"
      name={"EDUCATION & Certifications"}
    >
      <TypographyWrapper>
        <EducationAndCertificationsMdx />
      </TypographyWrapper>
    </ComponentWrapper>
  );
}
