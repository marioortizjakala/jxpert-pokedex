import { REGIONS } from '@/core/domain/region.constants';
import { Region } from '@/core/domain/region.model';
import { useState } from 'react';
import VerticalChevronIcon from '@/ui/components/atoms/icons/VerticalChevron';
import MagnifyingGlass from '@/ui/components/atoms/icons/MagnifyingGlass';
import Tick from '../../atoms/icons/Tick';
import {
  DropDownButtonStyled,
  DropDownListStyled,
  SearchInputStyled,
  SearchSectionStyled,
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
    <SearchSectionStyled className="search">
      <MagnifyingGlass />
      <SearchInputStyled
        placeholder="Search a Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="dropdown">
        <DropDownButtonStyled
          className="dropdown__button"
          onClick={() => setShowRegions((prev) => !prev)}
        >
          <span>{region}</span>

          <VerticalChevronIcon />
        </DropDownButtonStyled>
        <DropDownListStyled $show={showRegions}>
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
              {region === key && <Tick />}
            </li>
          ))}
        </DropDownListStyled>
      </div>
    </SearchSectionStyled>
  );
};

export default SearchBar;
