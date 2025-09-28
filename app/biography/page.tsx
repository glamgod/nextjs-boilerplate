import { Metadata } from "next";
import Biography from "../../components/Biography";

export const metadata: Metadata = {
  title: "Biography - Manolo Estavillo",
  description: "Learn about Dr. Manolo Estavillo's academic journey and artistic development in visual sociology and photography.",
};

export default function BiographyPage() {
  return <Biography />;
}