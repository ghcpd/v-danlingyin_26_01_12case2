export const matchesQuery = (text: string, query: string): boolean =>
  text.toLowerCase().includes(query.trim().toLowerCase());
