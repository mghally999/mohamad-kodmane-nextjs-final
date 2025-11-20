import { notFound, redirect } from "next/navigation";
import ArticleTemplate from "@/components/articles/ArticleTemplate";
import articlesData from "@/data/articles/articles-data";
import ArticleViewClient from "@/components/articles/ArticleViewClient";

// If you ever rename slugs, map old → new here.
const slugAliases = {
  "dubai-off-plan-investment-guide": "off-plan-investment-dubai",
};

export default function ArticlePage({ params }) {
  const requested = params.slug;
  const resolved = slugAliases[requested] || requested;

  if (slugAliases[requested]) {
    // Permanent redirect for old slugs
    redirect(`/articles/${resolved}`);
  }

  // Get article in default language first
  const article = articlesData.getArticleBySlug(resolved);
  if (!article) return notFound();

  const title = article.articleData.hero.title;

  return (
    <ArticleViewClient slug={resolved} title={title}>
      <ArticleTemplate article={article} slug={resolved} />
    </ArticleViewClient>
  );
}

export async function generateStaticParams() {
  const articles = articlesData.getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
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
