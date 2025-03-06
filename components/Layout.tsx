"use client";
import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { VolunteerSection } from "./VolunteerSection";
import { EmergencySection } from "./EmergencySection";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <main className="w-full min-h-screen bg-emerald-950">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <VolunteerSection />
      <EmergencySection />
      <Footer />
    </main>
  );
}
