import type { AstroSharedContext } from "astro";

export type AstroParams<T extends Record<string, string>> =
  AstroSharedContext<Record<string, any>, T>["params"];
