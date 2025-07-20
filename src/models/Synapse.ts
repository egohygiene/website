import synapses from '../data/synapses.json';

export interface Synapse {
  id: string;
  slug: string;
  title: string;
  content: string;
  tags: string[];
  pillar: string;
  created: string; // ISO date-time
  updated?: string; // ISO date-time
}

export function loadSynapses(): Synapse[] {
  return synapses as Synapse[];
}

export function mapSynapsesBySlug(): Record<string, Synapse> {
  return loadSynapses().reduce((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {} as Record<string, Synapse>);
}
