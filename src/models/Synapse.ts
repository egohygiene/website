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

/**
 * Historically this loader was exposed as `getSynapses` in various parts of the
 * codebase. Provide a thin wrapper so both names can be used interchangeably.
 */
export function getSynapses(): Synapse[] {
  return loadSynapses();
}

export function mapSynapsesBySlug(): Record<string, Synapse> {
  return loadSynapses().reduce((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {} as Record<string, Synapse>);
}
