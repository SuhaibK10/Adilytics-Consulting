import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { DistributionMap } from "@/components/home/DistributionMap";
import { HowWeWork } from "@/components/home/HowWeWork";
import { TrackRecord } from "@/components/home/TrackRecord";
import { Comparison } from "@/components/home/Comparison";
import { Clients } from "@/components/home/Clients";
import { GiftingTeaser } from "@/components/home/GiftingTeaser";
import { ClosingCTA } from "@/components/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <DistributionMap />
      <HowWeWork />
      <Clients />
      <TrackRecord />
      <Comparison />
      <GiftingTeaser />
      <ClosingCTA />
    </>
  );
}
