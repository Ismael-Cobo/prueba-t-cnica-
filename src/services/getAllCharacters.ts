import { BreakingBadInt } from '../interfaces/BreakingBadInt'

export const getAllCharacters = async (): Promise<BreakingBadInt[]> => {
  try {
    const resp = await fetch('https://www.breakingbadapi.com/api/characters?limit=10&ofset=10')
    const data = resp.json()

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error al cargar los datos')
  }
}
