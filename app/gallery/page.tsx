import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function GalleryPage() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
