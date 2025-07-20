import tags from '../data/tags.json';

export interface Tag {
  name: string;
  description: string;
  related?: string[];
}

export function loadTags(): Tag[] {
  return tags as Tag[];
}

export function mapTagsByName(): Record<string, Tag> {
  return loadTags().reduce((acc, tag) => {
    acc[tag.name] = tag;
    return acc;
  }, {} as Record<string, Tag>);
}
