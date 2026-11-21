"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import Positioning from "@/components/positioning";
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
