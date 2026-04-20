import AllEvents from "@/components/AllEvents";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function WorkshopsPage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <div className="fixed inset-0 z-[-1] bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-50">
          <source src="/galaxy-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <main className="relative overflow-x-hidden bg-transparent">
        <AllEvents />
        <Footer />
      </main>
    </div>
  );
}
