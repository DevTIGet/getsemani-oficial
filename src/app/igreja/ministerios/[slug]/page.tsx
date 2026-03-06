import { notFound } from "next/navigation";

import MinistryHero from "@/app/igreja/_components/ministries/MinistryHero";
import ArticleSection from "@/app/igreja/_components/ministries/ArticleSection";
import DonationBanner from "@/app/igreja/_components/ministries/DonationBanner";
import { SocialSection } from "@/app/igreja/_components/SocialSection";
import ContentBrowser, {
  type ContentBrowserItem,
  type ContentBrowserCategory,
  type ContentBrowserSocialLink,
} from "@/app/components/ContentBrowser";

import { MINISTRIES_DATA } from "@/app/constants/ministries";
import { MINISTRIES_PAGE_DATA } from "@/app/constants/ministries-page";
import { SOCIAL_SECTION_DATA } from "@/app/constants/social-section";

const ministryItems: ContentBrowserItem[] = MINISTRIES_DATA.map((m) => ({
  id: m.id,
  image: m.image,
  title: m.title,
  description: m.description,
  href: `/igreja/ministerios/${m.slug}`,
  category: m.name,
}));

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

const ministryCategories: ContentBrowserCategory[] = MINISTRIES_DATA.map(
  (m) => ({ id: m.name, label: m.name }),
);

const ministrySocialLinks: ContentBrowserSocialLink[] =
  SOCIAL_SECTION_DATA.socialLinks
    .filter(
      (l): l is typeof l & { platform: "instagram" | "facebook" | "youtube" } =>
        ["instagram", "facebook", "youtube"].includes(l.platform),
    )
    .map((l) => ({ platform: l.platform, url: l.url }));

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

      <ContentBrowser
        items={ministryItems}
        categories={ministryCategories}
        socialLinks={ministrySocialLinks}
      />

      <DonationBanner {...MINISTRIES_PAGE_DATA.donationBanner} />

      <SocialSection {...SOCIAL_SECTION_DATA} />
    </div>
  );
}
