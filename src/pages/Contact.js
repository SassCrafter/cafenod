import React from "react";
import { PageHero } from "../components/";
import { ContactForm } from "../components/Pages/";

function Contact() {
  return (
    <div>
      <PageHero bg="/images/pages/checkout/hero-bg.jpg" title="Contact Us" />
      <ContactForm />
    </div>
  );
}

export default Contact;
