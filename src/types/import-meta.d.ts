interface ImportMeta {
  glob(glob: string, options?: { eager?: boolean }): Record<string, any>;
  globEager?: unknown;
}

export {};
