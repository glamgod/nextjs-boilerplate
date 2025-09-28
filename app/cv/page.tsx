import { Metadata } from "next";
import CV from "../../components/CV";

export const metadata: Metadata = {
  title: "Curriculum Vitae - Manolo Estavillo",
  description: "View Dr. Manolo Estavillo's academic credentials, positions, awards, and professional accomplishments.",
};

export default function CVPage() {
  return <CV />;
}