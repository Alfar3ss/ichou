import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatIBuild } from "@/components/WhatIBuild";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Languages } from "@/components/Languages";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-plaster">
      <Nav />
      <Hero />
      <WhatIBuild />
      <About />
      <Skills />
      <Projects />
      <Languages />
      <Contact />
    </main>
  );
}
