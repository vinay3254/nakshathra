import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function FAQsPage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <FAQs />
        <Footer />
      </main>
    </div>
  );
}
