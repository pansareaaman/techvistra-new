import React, { useEffect } from "react";

import ContactUsSection from "../Components/ContactPage/ContactUsSection";
import ContactMain from "../Components/ContactPage/ContactMain";
import ContactForm from "../Components/ContactPage/ContactForm";
const ContactPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#0d0c1d] font-poppins">
    <ContactMain/>
    <ContactForm/>
    <ContactUsSection/>
    </div>
  );
};

export default ContactPage;