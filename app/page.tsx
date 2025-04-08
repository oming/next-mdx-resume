import EducationAndCertifications from "@/components/education-and-certifications";
import Etc from "@/components/etc";
import Experience from "@/components/experience";
import Introduce from "@/components/introduce";
import OpenSource from "@/components/opensource";
import Profile from "@/components/profile";
import Project from "@/components/project";
import Skill from "@/components/skill";

export default function Home() {
  return (
    <main className="mx-auto flex p-2 break-words break-keep not-print:container lg:p-8 print:w-full print:p-0">
      <article className="grid flex-1 gap-16 print:gap-2">
        <Profile />
        <Introduce />
        <Skill />
        <Experience />
        <Project />
        <OpenSource />
        <EducationAndCertifications />
        <Etc />
      </article>
    </main>
  );
}
