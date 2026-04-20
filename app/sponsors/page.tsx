import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import Sponsors from "@/components/Sponsors";

export default function SponsorsPage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <Sponsors />
        <Footer />
      </main>
    </div>
  );
}
