import {
  ButtonContainer,
  Buttons,
  FiltersContainer,
  FilterSpan,
  OutLineShortText,
  SearchBar,
  SearchBox,
  SearchInput,
  TagButton,
} from '../styled-elements/SearchElements'

function Search({ search, setSearch }) {
  return (
    <SearchBar>
      <SearchBox />
      <SearchInput
        placeholder='Search...'
        type='type'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ButtonContainer>
        <Buttons>
          <TagButton>Minimal</TagButton>
          <TagButton>House</TagButton>
          <TagButton>Minimal</TagButton>
        </Buttons>
        <FiltersContainer>
          <OutLineShortText />
          <FilterSpan>Filters</FilterSpan>
        </FiltersContainer>
      </ButtonContainer>
    </SearchBar>
  )
}

export default Search
