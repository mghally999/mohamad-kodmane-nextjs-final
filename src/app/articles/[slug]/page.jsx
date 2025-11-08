import { notFound, redirect } from "next/navigation";
import ArticleTemplate from "@/components/articles/ArticleTemplate";
import articlesData from "@/data/articles/articles-data";

const slugAliases = {
  "dubai-off-plan-investment-guide": "off-plan-investment-dubai",
  // add more aliases here if you ever rename slugs
};

export default function ArticlePage({ params }) {
  const requested = params.slug;
  const resolved = slugAliases[requested] || requested;

  if (slugAliases[requested]) {
    // 301-style redirect keeps URLs tidy
    redirect(`/articles/${resolved}`);
  }

  const article = articlesData.getArticleBySlug(resolved);
  if (!article) return notFound();

  return <ArticleTemplate article={article} />;
}

export async function generateStaticParams() {
  return articlesData.getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const resolved = slugAliases[params.slug] || params.slug;
  const article = articlesData.getArticleBySlug(resolved);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.articleData.hero.title,
    description: article.articleData.hero.subtitle,
    openGraph: {
      title: article.articleData.hero.title,
      description: article.articleData.hero.subtitle,
      images: [article.image],
      type: "article",
    },
  };
}
