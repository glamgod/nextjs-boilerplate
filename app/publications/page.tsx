import { Metadata } from "next";
import Publications from "../../components/Publications";

export const metadata: Metadata = {
  title: "Publications - Manolo Estavillo",
  description: "Explore Dr. Manolo Estavillo's academic publications, research papers, and scholarly contributions in visual sociology.",
};

export default function PublicationsPage() {
  return <Publications />;
}