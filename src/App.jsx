import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import MainC from "./components/MainC";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className="row">
        <Side />
        <MainC />
      </div>
      <Footer />
    </main>
  );
}

export default App;
