import systems from '../data/systems.json';

export interface System {
  name: string;
  description: string;
  pillar: string;
  components: string[];
}

export function loadSystems(): System[] {
  return systems as System[];
}

export function mapSystemsByName(): Record<string, System> {
  return loadSystems().reduce((acc, system) => {
    acc[system.name] = system;
    return acc;
  }, {} as Record<string, System>);
}
