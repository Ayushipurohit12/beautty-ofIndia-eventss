import React from "react";
import BenefitsBar from "../components/markets/BenefitsBar.jsx";
import EventsSection from "../components/markets/EventsSection.jsx";
import MarketHero from "../components/markets/MarketHero.jsx";
import NewsletterSection from "../components/markets/NewsletterSection.jsx";

export default function MarketsPage({ onEventSelect }) {
  const scrollToEvents = () => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <MarketHero onViewEvents={scrollToEvents} />
      <BenefitsBar />
      <EventsSection onEventSelect={onEventSelect} />
      <NewsletterSection />
    </>
  );
}
