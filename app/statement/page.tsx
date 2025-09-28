import { Metadata } from "next";
import ArtistStatement from "../../components/ArtistStatement";

export const metadata: Metadata = {
  title: "Artist Statement - Manolo Estavillo",
  description: "Explore Dr. Manolo Estavillo's artistic philosophy and approach to visual sociology and documentary photography.",
};

export default function StatementPage() {
  return <ArtistStatement />;
}