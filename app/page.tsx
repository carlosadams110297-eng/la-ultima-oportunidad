import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Recuerdos from "./components/Recuerdos";
import Lamentos from "./components/Lamentos";
import Diario from "./components/Diario";
import VolverALeerme from "./components/VolverALeerme";
import Final from "./components/Final";

export default function Home() {
  return (
    <main className="bg-[#f6f1eb]">
      <Hero />
      <Timeline />
      <Recuerdos />
      <Lamentos />
      <Diario />
      <VolverALeerme />
      <Final />
    </main>
  );
}