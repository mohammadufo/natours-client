import { publicService } from './publicRequest'

export const fetchAllTours = async () => {
  const data = await publicService.api('GET', '/tours', {}, {})
  return data
}
