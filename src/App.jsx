import Footer from "./Footer";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-950 text-white">
        <Navbar />
        {/* <Landingpage  /> */}
        <Footer />
      </div>
    </>
  );
}
export default App;
