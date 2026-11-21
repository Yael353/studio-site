"use client";

import Hero from "@/components/hero/hero";
import Positioning from "@/components/positioning/positioning";
import Projects from "@/components/projects/projects";
import Services from "@/components/services/services";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <Hero />
      <Positioning />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
