import { notFound } from "next/navigation";
import MinistryHero from "@/app/igreja/_components/ministries/MinistryHero";
import ArticleSection from "@/app/igreja/_components/ministries/ArticleSection";
import { MINISTRIES_DATA } from "@/app/constants/ministries";

type MinistryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Gera paths estáticos para todos os ministérios
export async function generateStaticParams() {
  return MINISTRIES_DATA.map((ministry) => ({
    slug: ministry.slug,
  }));
}

// Gera metadados dinâmicos para SEO
export async function generateMetadata({ params }: MinistryPageProps) {
  const { slug } = await params;
  const ministry = MINISTRIES_DATA.find((m) => m.slug === slug);

  if (!ministry) {
    return {
      title: "Ministério não encontrado",
    };
  }

  return {
    title: `${ministry.title} | Igreja Getsêmani`,
    description: ministry.description,
  };
}

export default async function MinistryPage({ params }: MinistryPageProps) {
  const { slug } = await params;
  const ministry = MINISTRIES_DATA.find((m) => m.slug === slug);

  if (!ministry) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="py-8" />
      {/* Hero Section */}
      <MinistryHero
        title={ministry.title}
        slogan={ministry.slogan}
        heroImage={ministry.heroImage}
      />

      {/* Articles Section */}
      {ministry.articles.length > 0 && (
        <ArticleSection articles={ministry.articles} />
      )}
    </div>
  );
}
