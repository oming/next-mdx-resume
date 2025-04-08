import Image from "next/image";

import type { SimpleIcon } from "simple-icons";
import * as icons from "simple-icons";

export const getIcon = (slug: string): SimpleIcon | null => {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  return (icons as unknown as Record<string, SimpleIcon>)[key] || null;
};

interface SimpleIconsProps {
  slug: string; // github, naver 등
  className?: string;
  toImage?: boolean; // 이미지로 출력 (마크다운 내에서 필요함)
}

// https://simpleicons.org/
// 유명 브랜드의 로고를 사용하기 위해 추가됨.
// 마크다운내에서 사용하기 위해서는 toImage 옵션을 추가함.
export default function SimpleIcons({
  slug,
  className,
  toImage,
}: SimpleIconsProps) {
  // 아이콘 찾기 (slug를 기반으로)

  const icon = getIcon(slug);

  // 아이콘이 없는 경우 처리
  if (!icon) {
    return <span>Icon not found</span>;
  }

  if (toImage) {
    const svg = `<svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#${icon.hex}"
    >
      <title>${icon.title}</title>
      <path d="${icon.path}" />
    </svg>`;

    const svgData = encodeURIComponent(svg); // SVG를 URL로 변환
    return (
      <Image
        src={`data:image/svg+xml,${svgData}`}
        color={`#${icon.hex}`}
        alt={icon.title}
        width={24}
        height={24}
        className={className}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      className={className}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
