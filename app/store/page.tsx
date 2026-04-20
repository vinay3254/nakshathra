import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import Registration from "@/components/Registration";
import RightSidebar from "@/components/RightSidebar";

export default function StorePage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <Registration />
        <Footer />
      </main>
    </div>
  );
}
