import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Hero } from "@/components/site/Hero";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Partnering } from "@/components/site/Partnering";
import { Footer } from "@/components/site/Footer";
import { Grain, ScrollProgress, CursorGlow, Ticker } from "@/components/site/Fx";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bakery Facilities — Premium B2B Bakery Solutions" },
      {
        name: "description",
        content:
          "French savoir-faire frozen bakery and pastry for professional kitchens across Hong Kong, Mainland China, Taiwan and Macau.",
      },
      { property: "og:title", content: "Bakery Facilities — Premium B2B Bakery Solutions" },
      {
        property: "og:description",
        content: "The smart bakery solution for professionals: viennoiserie, bread, dessert, savory and ingredients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background">
      <Grain />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <FloatingNav />
      <Hero />
      <Ticker
        items={["Viennoiserie", "Frozen Bread", "Patisserie", "Savory", "Culinary Aid", "Ingredients"]}
      />
      <Gallery />
      <Ticker
        variant="outline"
        reverse
        items={["Hong Kong", "Macau", "Taiwan", "Shanghai", "Guangzhou", "Beijing"]}
      />
      <About />
      <Partnering />
      <Footer />
    </main>
  );
}

