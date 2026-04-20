import AllEvents from "@/components/AllEvents";
import FlagshipEvents from "@/components/FlagshipEvents";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function EventsPage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <FlagshipEvents />
        <AllEvents />
        <Footer />
      </main>
    </div>
  );
}
