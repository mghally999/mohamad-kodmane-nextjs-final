// app/investor-hub/page.jsx (or pages/investor-hub.js)

"use client";

import { useLanguage } from "@/components/LanguageProvider";
import OffPlanInvestment from "@/components/OffPlanInvestment";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import CapitalGrowth from "@/components/CapitalGrowth";
import DubaiDemand from "@/components/DubaiDemand";
import DubaiEconomicGrowth from "@/components/DubaiEconomicGrowth";
import CallbackForm from "@/components/CallbackForm";

export default function InvestorHubPage() {
  const { locale } = useLanguage();

  return (
    <main>
      {/* Top title like Sobha’s “EXPLORE OUR LUXURY PROPERTIES IN THE UAE” */}
      {/* You can have your own heading component if you want */}
      <section className="section-heading">
        <h1>Investor Hub</h1>
        <p>Deep insights & strategies for serious Dubai property investors.</p>
      </section>

      <OffPlanInvestment locale={locale} />
      <PortfolioInvestment locale={locale} />
      <CapitalGrowth locale={locale} />
      <DubaiDemand locale={locale} />
      <DubaiEconomicGrowth locale={locale} />

      {/* Strong CTA at bottom */}
      <CallbackForm locale={locale} />
    </main>
  );
}
