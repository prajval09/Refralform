import { useState } from "react";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ReferralBenefits from "./ReferralBenefits";
import Steps from "./Steps";
import ReferralModal from "./RefferalModel";
import ThankYouPopup from "./ThankYouPopup";
// src/App.jsx

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Navbar />
      <Hero onOpenModal={openModal} />
      <Steps />
      <ReferralBenefits onOpenModal={openModal} />
      <FAQ />
      <Footer />
      <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;