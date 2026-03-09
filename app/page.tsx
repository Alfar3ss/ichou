import { About } from "./components/about";
import { BentoGrid } from "./components/bento-grid";
import { Contact } from "./components/contact";
import { CustomCursor } from "./components/custom-cursor";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <BentoGrid />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
