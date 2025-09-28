import { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoEssay from "../../../components/PhotoEssay";

interface Props {
  params: Promise<{ essayId: string }>;
}

const validEssayIds = ["coney-island", "urban-solitude", "migration-stories", "neighborhood-portraits", "ritual-spaces", "generational-bridges"];

const essayTitles: Record<string, string> = {
  "coney-island": "Coney Island: American Dreams by the Sea",
  "urban-solitude": "Urban Solitude",
  "migration-stories": "Migration Stories",
  "neighborhood-portraits": "Neighborhood Portraits",
  "ritual-spaces": "Ritual Spaces",
  "generational-bridges": "Generational Bridges"
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { essayId } = await params;

  if (!validEssayIds.includes(essayId)) {
    return {
      title: "Essay Not Found",
    };
  }

  const title = essayTitles[essayId] || "Photo Essay";

  return {
    title: `${title} - Manolo Estavillo`,
    description: `Explore the photo essay "${title}" by Dr. Manolo Estavillo, featuring visual sociology and documentary photography.`,
  };
}

export async function generateStaticParams() {
  return validEssayIds.map((essayId) => ({
    essayId,
  }));
}

export default async function PhotoEssayPage({ params }: Props) {
  const { essayId } = await params;

  if (!validEssayIds.includes(essayId)) {
    notFound();
  }

  return <PhotoEssay essayId={essayId} />;
}