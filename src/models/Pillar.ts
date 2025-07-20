import pillars from '../data/pillars.json';

export interface Pillar {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  domains: string[];
  aspects: string[];
  tags: string[];
  quote: string;
  image?: string;
}

export function loadPillars(): Pillar[] {
  return pillars as Pillar[];
}

export function mapPillarsBySlug(): Record<string, Pillar> {
  return loadPillars().reduce((acc, pillar) => {
    acc[pillar.slug] = pillar;
    return acc;
  }, {} as Record<string, Pillar>);
}
