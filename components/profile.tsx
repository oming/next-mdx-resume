import Image from "next/image";

import ProfileMdx, { metadata } from "@/content/profile.mdx";

import { Card, CardContent } from "@/components/ui/card";
import { TypographyWrapper } from "@/components/ui/component-wrapper";

export default function Profile() {
  const { image, imageCaption } = metadata;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:px-8">
      <figure className={"w-full shrink-0 space-y-1 sm:w-64 print:w-48"}>
        <div className="overflow-hidden rounded-md">
          <Image
            src={image}
            className={
              "mx-auto aspect-[3/4] object-cover shadow-sm transition-all hover:scale-105"
            }
            width={480}
            height={640}
            alt={"photo"}
          />
        </div>
        {imageCaption && (
          <figcaption className="text-muted-foreground text-center text-xs md:pt-2 md:text-left">
            <span className="text-foreground font-semibold">
              {imageCaption}
            </span>
          </figcaption>
        )}
      </figure>
      <Card className="w-full py-0 sm:max-w-lg">
        <CardContent>
          <TypographyWrapper>
            <ProfileMdx />
          </TypographyWrapper>
        </CardContent>
      </Card>
    </div>
  );
}
