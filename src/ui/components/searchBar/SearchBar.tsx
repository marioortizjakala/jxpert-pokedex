import { REGIONS } from '@/core/domain/region.constants';
import { Region } from '@/core/domain/region.model';
import { useState } from 'react';
import VerticalChevronIcon from '@/ui/components/icons/VerticalChevron';
import MagnifyingGlassIcon from '@/ui/components/icons/MagnifyingGlass';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  region: Region;
  setRegion: (r: Region) => void;
}

const SearchBar = ({ query, setQuery, region, setRegion }: SearchBarProps) => {
  const [showRegions, setShowRegions] = useState(false);

  return (
    <section className="search">
      <MagnifyingGlassIcon />
      <input
        placeholder="Search a Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="dropdown">
        <button
          className="dropdown__button"
          onClick={() => setShowRegions((prev) => !prev)}
        >
          {region}
          <VerticalChevronIcon />
        </button>
        <ol className={`dropdown__list ${!showRegions ? 'hide' : ''}`}>
          {(Object.keys(REGIONS) as Region[]).map((key) => (
            <li
              key={key}
              className={region === key ? 'active' : ''}
              onClick={() => {
                setRegion(key);
                setShowRegions(false);
              }}
            >
              {key}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SearchBar;
