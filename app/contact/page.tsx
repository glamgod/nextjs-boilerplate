import { Metadata } from "next";
import Contact from "../../components/Contact";

export const metadata: Metadata = {
  title: "Contact - Manolo Estavillo",
  description: "Get in touch with Dr. Manolo Estavillo for collaborations, exhibitions, or academic inquiries.",
};

export default function ContactPage() {
  return <Contact />;
}