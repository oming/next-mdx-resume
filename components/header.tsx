import Link from "next/link";

import SimpleIcons from "./icon/simple-icons";
import PrintButton from "./print-button";

export default function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-11 w-full items-center justify-between border-b px-8 backdrop-blur print:hidden">
      <h1 className="truncate font-bold">
        The resume was created using next-mdx-resume. 😘
      </h1>
      <PrintButton />
      <nav className="flex items-center gap-2">
        <p className="text-muted-foreground hidden text-xs font-bold md:block">
          소스코드가 필요하세요? 👉
        </p>
        <Link href="https://github.com/oming/next-mdx-resume" target="_blank">
          <SimpleIcons slug="github" />
        </Link>
      </nav>
    </header>
  );
}
