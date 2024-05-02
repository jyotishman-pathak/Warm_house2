
import { BentoGridDemo } from "./components/Section";
import { Typewriter } from "./components/TypeWriter";
import Hero from "./components/HeroNav";

export default function Home() {
  return (
   <section>

    <div>
    <Hero />
   <Typewriter />
      <BentoGridDemo/>
    </div>
   </section>
  );
}



