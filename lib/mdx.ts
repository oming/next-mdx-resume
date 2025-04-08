import fs from "fs";
import path from "path";

export async function getAllExperience() {
  const mdxFiles = fs
    .readdirSync(path.join(process.cwd(), "content", "experience"))
    .filter((file) => file.endsWith(".mdx"));

  // 파일별 metadata 가져오기
  const filesWithMetadata = await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata } = await import(`@/content/experience/${file}`);
      return {
        fileName: path.basename(file, ".mdx"),
        metadata: metadata as ExperienceMetadata,
      };
    }),
  );

  return filesWithMetadata;
}

export async function getAllProject() {
  const mdxFiles = fs
    .readdirSync(path.join(process.cwd(), "content", "project"))
    .filter((file) => file.endsWith(".mdx"));

  // 파일별 metadata 가져오기
  const filesWithMetadata = await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata } = await import(`@/content/project/${file}`);
      return {
        fileName: path.basename(file, ".mdx"),
        metadata: metadata as ProjectMetadata,
      };
    }),
  );

  return filesWithMetadata;
}

export async function getAllOpenSource() {
  const mdxFiles = fs
    .readdirSync(path.join(process.cwd(), "content", "opensource"))
    .filter((file) => file.endsWith(".mdx"));

  // 파일별 metadata 가져오기
  const filesWithMetadata = await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata } = await import(`@/content/opensource/${file}`);
      return {
        fileName: path.basename(file, ".mdx"),
        metadata: metadata as OpenSourceMetadata,
      };
    }),
  );

  return filesWithMetadata;
}
