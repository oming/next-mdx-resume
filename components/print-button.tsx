"use client";

import { PrinterIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PrintButton() {
  return (
    <Button variant={"destructive"} size={"sm"} onClick={() => window.print()}>
      <PrinterIcon />
      <span className="hidden md:block">PDF로 내보내기</span>
    </Button>
  );
}
