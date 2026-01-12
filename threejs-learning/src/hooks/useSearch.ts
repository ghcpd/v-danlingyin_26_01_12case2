import { useState, useMemo } from 'react';

interface UseSearchResult<T> {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredItems: T[];
}

export function useSearch<T>(
  items: T[],
  searchFields: (keyof T)[],
  initialTerm = ''
): UseSearchResult<T> {
  const [searchTerm, setSearchTerm] = useState(initialTerm);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerSearchTerm);
        }
        return false;
      })
    );
  }, [items, searchFields, searchTerm]);

  return { searchTerm, setSearchTerm, filteredItems };
}
