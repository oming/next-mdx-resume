// mdx.d.ts
declare module '*.mdx' {
  let metadata: any
  let defaultExport: any
  export { metadata }
  export default defaultExport
}

type ExperienceMetadata = {
  hidden: boolean; // 마크다운 콘텐츠 숨김 여부
  startDate: string; // 시작일
  endDate: string; // 종료일
  company: string; // 회사명
  url?: string; // 회사 URL
  position: string; // 직무
  skill: string[]; // 사용 기술
};

type ProjectMetadata = {
  hidden: boolean; // 마크다운 콘텐츠 숨김 여부
  startDate: string; // 시작일 
  endDate: string; // 종료일
  project: string; // 프로젝트명
  type: "SYS" | "DEV"; // 프로젝트 유형 (SYS: 시스템, DEV: 개발)
  company: string; // 회사명
  position: string; // 직무 또는 역할
  skill: string[]; // 사용 기술
};

type OpenSourceMetadata = {
  hidden: boolean; // 마크다운 콘텐츠 숨김 여부
  project: string; // 프로젝트명
  link: string; // 프로젝트 링크
  startDate: string; // 시작일
};
