import About from "@/components/About";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function AboutPage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <About />
        <Footer />
      </main>
    </div>
  );
}
