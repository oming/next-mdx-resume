import type { MDXComponents } from "mdx/types";

import SimpleIcons from "@/components/icon/simple-icons";
import BrandBadge from "@/components/mdx/brand-badge";
import ShowWhen from "@/components/mdx/show-when";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/components/ui/typography";

/**
 *
 * MDX의 기본 컴포넌트를 재정의 한다.
 *
 * 기본 컴포넌트:
 * - a, blockquote, br, code, em, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, strong, and ul
 *
 * 참고:
 * - https://mdxjs.com/table-of-components/
 * - https://github.com/owolfdev/mdx-blog/blob/main/mdx-components.tsx
 * - https://ui.shadcn.com/docs/components/typography
 *
 * @param components
 * @returns
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      // console.log("useMDXComponents - a", props);
      const { href = "" } = props;

      const isExternalLink = href.startsWith("http");

      if (isExternalLink) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
        );
      }

      // For internal links, use Next.js' `Link` component
      return <Link href={href} {...props} />;
    },
    Badge,
    SimpleIcons,
    BrandBadge,
    ShowWhen,
    ...components,
  };
}
