import { db } from 'astro:db';
import { Pillar, Synapse, Tag, Term } from './config';

// https://astro.build/db/seed
export default async function seed() {
  // Placeholder seed data. Real data will be loaded separately.
  await db.insert(Pillar).values({
    id: 1,
    slug: 'demo',
    title: 'Demo Pillar',
    subtitle: 'Placeholder',
    description: 'Seed data placeholder',
    domains: [],
    aspects: [],
    tags: [],
    quote: 'Seed',
  });

  await db.insert(Tag).values({
    name: 'demo',
    description: 'Placeholder tag',
  });

  await db.insert(Term).values({
    id: '1',
    slug: 'demo-term',
    term: 'Demo Term',
    definition: 'Placeholder term definition',
  });

  await db.insert(Synapse).values({
    id: '1',
    slug: 'demo-synapse',
    title: 'Demo Synapse',
    content: 'Seed data placeholder',
    tags: ['demo'],
    pillarSlug: 'demo',
    created: new Date(),
  });
}
