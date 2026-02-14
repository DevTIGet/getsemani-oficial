import type { MinistryArticle } from "./ministry-article";

export interface Ministry {
  id: number;
  slug: string;
  name: string;
  title: string;
  slogan: string;
  description: string;
  image: string;
  heroImage: string;
  articles: MinistryArticle[];
}
