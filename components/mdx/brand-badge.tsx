import SimpleIcons, { getIcon } from "@/components/icon/simple-icons";
import { Badge } from "@/components/ui/badge";

export interface BrandBadgeProps {
  slug: string;
  add: string;
}

const BrandBadge = ({ slug, add }: BrandBadgeProps) => {
  const icon = getIcon(slug);

  return (
    <Badge variant={"outline"} className="not-prose">
      {icon ? (
        <>
          <SimpleIcons slug={slug} toImage /> {icon.title} {add && `- ${add}`}
        </>
      ) : (
        <>
          {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
          {add && `- ${add}`}
        </>
      )}
    </Badge>
  );
};

export default BrandBadge;
