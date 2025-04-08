import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";
import { H2, H3 } from "@/components/ui/typography";

export function ComponentWrapper({
  className,
  name,
  badge,
  badgeRight,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"section"> & {
  name: string;
  badge?: React.ReactNode;
  badgeRight?: boolean;
}) {
  return (
    <section
      id={name}
      data-name={name.toLowerCase()}
      className={cn(
        "w-full scroll-mt-16 flex-col rounded-lg border not-print:flex",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center border-b px-4 py-3 print:px-2 print:py-1.5",
          badge && "gap-2",
          badgeRight && "justify-between",
        )}
      >
        <H2 className="border-none pb-0 font-extrabold print:text-lg">
          {name}
        </H2>
        {badge}
      </div>
      <div className="flex-1 items-center gap-2 p-4 not-print:flex print:py-2">
        {children}
      </div>
    </section>
  );
}

export function CommonSkeleton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
}

export function TypographyWrapper({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose print:prose-sm h-full max-w-none",
        "prose-a:text-blue-600",
        "prose-p:leading-6 prose-p:mt-0 prose-p:mb-4",
        "prose-h1:border-b prose-h1:mt-6 prose-h1:mb-4 prose-h1:pb-2.5",
        "prose-h2:border-b prose-h2:mt-6 prose-h2:mb-4 prose-h2:pb-2",
        "prose-ol:mt-0 prose-ol:list-decimal prose-ol:[&_li]:mt-0",
        // "prose-ol:[&_li]:pl-1.5 prose-ol:[&_ol]:ml-4",
        // "prose-ol:[&_li]:list-[lower-roman]",
        "prose-ul:mt-0 prose-ul:mb-4 prose-ul:[&_li]:mt-0 prose-ul:[&_li]:py-0 prose-ul:[&_ul]:pb-0 prose-ul:[&_ul]:list-[revert] prose-ul:marker:text-black",
        "prose-li:m-0 prose-li:leading-6 prose-li:[&_ul]:m-0",
        "prose-code:bg-accent prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-normal",
        "prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:[&_code]:bg-transparent",
        "prose-blockquote:mb-4 prose-blockquote:mt-0",
        // "prose-ol:[counter-reset:section] prose-ol:[&_li]:[counter-increment:section] prose-ol:[&_li::marker]:[content:counters(section,'.')] prose-ol:[&_ol]:[counter-reset:section] prose-ol:[&_li]:pl-1.5 prose-ol:[&_ol]:ml-4",
        className,
      )}
      {...props}
    />
  );
}
