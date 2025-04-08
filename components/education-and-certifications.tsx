import EducationAndCertificationsMdx from "@/content/education-and-certifications.mdx";

import {
  ComponentWrapper,
  TypographyWrapper,
} from "@/components/ui/component-wrapper";

export default function EducationAndCertifications() {
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
