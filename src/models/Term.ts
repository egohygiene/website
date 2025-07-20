import terms from '../data/terms.json';

export interface Term {
  id: string;
  slug: string;
  term: string;
  definition: string;
}

export function loadTerms(): Term[] {
  const data = terms as unknown[];
  return data.filter((item) => validateTerm(item)) as Term[];
}

export function mapTermsBySlug(): Record<string, Term> {
  return loadTerms().reduce((acc, t) => {
    acc[t.slug] = t;
    return acc;
  }, {} as Record<string, Term>);
}

function validateTerm(item: any): item is Term {
  if (typeof item !== 'object' || item === null) return false;
  const required = ['id', 'slug', 'term', 'definition'];
  for (const key of required) {
    if (!(key in item)) return false;
  }
  return true;
}
