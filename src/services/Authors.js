import axios from 'axios'

export const getAuthors = async () => {
  try {
    const { data } = await axios.get(
      'https://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6'
    )
    return data
  } catch (err) {
    return false
  }
}
