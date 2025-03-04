import Navbar from "@/components/navbar/navbar";
import HomePage from "./(home)/home";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
  <>
  <Navbar/>
 <div className="bg-[#F2EEF7] ">
 <HomePage />
 </div>
  <Footer/>
  </>
  );
}
