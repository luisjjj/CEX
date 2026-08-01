import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageTemplateProps {
  title: string;
  description: string;
}

export default function PageTemplate({ title, description }: PageTemplateProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-[720px] mx-auto px-5 md:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500">
              This page is coming soon. Please{" "}
              <a href="/contact" className="text-brand-link hover:underline">
                contact our support team
              </a>{" "}
              if you need assistance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
