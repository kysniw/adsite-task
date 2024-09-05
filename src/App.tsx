import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Main from "./components/Main";
import Seo from "./components/Seo";

function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Main />
      <Gallery />
      <Seo />
      <Footer />
    </div>
  );
}

export default App;
