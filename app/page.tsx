import Hero from "@/components/Hero";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <Hero />
      </main>
    </div>
  );
}
