// mdx.d.ts
declare module '*.mdx' {
  let metadata: any
  let defaultExport: any
  export { metadata }
  export default defaultExport
}

type ExperienceMetadata = {
  hidden: boolean; // 마크다운 콘텐츠 숨김 여부
  startDate: string;
  endDate: string;
  company: string;
  url?: string;
  position: string;
  skill: string[];
};

type ProjectMetadata = {
  hidden: boolean; // 마크다운 콘텐츠 숨김 여부
  startDate: string;
  endDate: string;
  project: string;
  type: "SYS" | "DEV";
  company: string;
  position: string;
  skill: string[];
};

type OpenSourceMetadata = {
  hidden: boolean; // 마크다운 콘텐츠 숨김 여부
  project: string;
  link: string;
  startDate: string;
};
