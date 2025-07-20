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
  const data = synapses as unknown[];
  return data.filter((item) => validateSynapse(item)) as Synapse[];
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

function validateSynapse(item: any): item is Synapse {
  if (typeof item !== 'object' || item === null) return false;
  const required = ['id', 'slug', 'title', 'content', 'tags', 'pillar', 'created'];
  for (const key of required) {
    if (!(key in item)) return false;
  }
  if (!Array.isArray(item.tags)) return false;
  if (isNaN(Date.parse(item.created))) return false;
  if (item.updated && isNaN(Date.parse(item.updated))) return false;
  return true;
}
