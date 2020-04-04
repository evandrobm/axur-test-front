import axios from 'axios'

export const getPosts = async () => {
  try {
    const { data } = await axios.get(
      'http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8'
    )
    return data
  } catch (err) {
    return false
  }
}
