'use client';

import { useState, useEffect } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }: { 
  onSearch: (query: string) => void; 
}) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim() !== '') {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Hľadať právne predpisy..."
          className="search-input"
          aria-label="Vyhľadávanie právnych predpisov"
        />
        <button type="submit" className="search-button">
          Hľadať
        </button>
      </form>
    </div>
  );
}