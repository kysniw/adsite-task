import { useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Seo from "./components/Seo";
import Title from "./components/ui/Title";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="bg-secondary">
      <Header setModalOpen={() => setIsModalVisible(true)} />
      <Main setModalOpen={() => setIsModalVisible(true)} />
      <Gallery />
      <Seo />
      <Footer />
      <Modal
        isVisible={isModalVisible}
        setClose={() => setIsModalVisible(false)}
      >
        <Title size="sm" className="border-b-2 border-secondary pb-2">
          Dane kontaktowe
        </Title>
        <p className="text-xl font-semibold text-primary pt-4">
          +48 123 456 789
        </p>
        <p className="text-xl font-semibold text-primary pt-4">
          test@example.com
        </p>
      </Modal>
    </div>
  );
}

export default App;
