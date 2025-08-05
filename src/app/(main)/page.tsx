import ArticleLayout from "@/components/layouts/article_layout";
import HeroLayout from "@/components/layouts/hero-layout";
export default function Home() {
  return (
    <main className="min-h-[90vh]">
      <HeroLayout />
      <ArticleLayout />
    </main>
  );
}
