import Image from "next/image";
import type { MinistryArticle } from "@/app/types/ministry-article";

type ArticleSectionProps = {
  articles: MinistryArticle[];
};

export default function ArticleSection({ articles }: ArticleSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
        {articles.map((article) => (
          <article
            key={article.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Conteúdo do texto */}
            <div
              className={`space-y-6 ${
                article.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white uppercase">
                {article.title}
              </h2>

              <div className="space-y-4">
                {article.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Imagem */}
            <div
              className={`relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden ${
                article.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
