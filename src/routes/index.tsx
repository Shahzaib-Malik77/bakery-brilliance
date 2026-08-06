import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Hero } from "@/components/site/Hero";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Partnering } from "@/components/site/Partnering";
import { Footer } from "@/components/site/Footer";

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
    <main className="bg-background">
      <Navbar />
      <FloatingNav />
      <Hero />
      <Gallery />
      <About />
      <Partnering />
      <Footer />
    </main>
  );
}
