"use client";

import Navbar from "@/components/navbar";
import { Breadcrumbs } from "@/components/ui/breadcrumb";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      {children}
    </>
  );
}
