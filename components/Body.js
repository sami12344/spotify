import React, { useState } from 'react'
import { BodySection, PlaylistContainer } from '../styled-elements/BodyElements'
import Search from './Search'

const Body = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  return (
    <BodySection>
      <Search search={search} setSearch={setSearch}/>
      <PlaylistContainer>
        
      </PlaylistContainer>
  </BodySection>
  )
}

export default Body