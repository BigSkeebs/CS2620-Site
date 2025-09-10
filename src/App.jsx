import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Side from "./Components/Side";
import MainC from "./Components/MainC";
import Footer from "./Components/Footer";

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
