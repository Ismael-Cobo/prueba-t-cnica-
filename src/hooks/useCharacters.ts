import { useState, useEffect } from 'react'

import { getAllCharacters } from '../services'

import { BreakingBadInt } from '../interfaces'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<BreakingBadInt[]>()
  const [charactersToFilter, setCharactersToFilter] = useState<BreakingBadInt[]>()
  useEffect(() => {
    const getAll = async () => {
      const json = await getAllCharacters()
      setCharacters(json)
      setCharactersToFilter(json)
    }

    getAll()
  }, [])

  const filterByName = (name: string): void => {
    let filter = characters?.filter(
      (character) =>
        character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
        character.nickname.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )

    setCharactersToFilter(filter)
  }

  return {
    characters,
    charactersToFilter,
    filterByName,
  }
}
