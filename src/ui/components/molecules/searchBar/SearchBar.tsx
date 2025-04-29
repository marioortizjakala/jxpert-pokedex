import { REGIONS } from '@/core/domain/region.constants';
import { Region } from '@/core/domain/region.model';
import { useState } from 'react';
import VerticalChevronIcon from '@/ui/components/atoms/icons/VerticalChevron';
import MagnifyingGlass from '@/ui/components/atoms/icons/MagnifyingGlass';
import Tick from '../../atoms/icons/Tick';
import {
  DropDownButton,
  DropDownList,
  SearchInput,
  SearchSection,
} from './SearchBar.styled';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  region: Region;
  setRegion: (r: Region) => void;
}

const SearchBar = ({ query, setQuery, region, setRegion }: SearchBarProps) => {
  const [showRegions, setShowRegions] = useState(false);

  return (
    <SearchSection className="search">
      <MagnifyingGlass />
      <SearchInput
        placeholder="Search a Pokémon..."
        aria-label="Search Pokémon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="dropdown">
        <DropDownButton
          className="dropdown__button"
          onClick={() => setShowRegions((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={showRegions}
          aria-controls="region-dropdown"
        >
          <span>{region}</span>

          <VerticalChevronIcon />
        </DropDownButton>
        <DropDownList $show={showRegions} aria-hidden={!showRegions}>
          {(Object.keys(REGIONS) as Region[]).map((key, i) => (
            <li
              key={key}
              role="option"
              aria-selected={region === key}
              tabIndex={0}
              className={region === key ? 'active' : ''}
              onClick={() => {
                setRegion(key);
                setShowRegions(false);
              }}
            >
              {key}
              {region === key && <Tick />}
            </li>
          ))}
        </DropDownList>
      </div>
    </SearchSection>
  );
};

export default SearchBar;
