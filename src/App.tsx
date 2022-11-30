import { Cards, Search } from './components'

import { useCharacters } from './hooks';

import './App.css'

function App() {

  const { charactersToFilter, filterByName } = useCharacters()

  return (
    <>
      <Search filterByName={filterByName} />
      {
        charactersToFilter &&

        <Cards characters={charactersToFilter} />
      }
    </>
  )
}

export default App
