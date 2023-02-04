import axios from 'axios'

const Url = `http://localhost:8080/academic-1.0-SNAPSHOT/api/course/get`

const getFacultyCourse = async (id) => {
  const response = await axios.get(`${Url}/${id}`)
  console.log(response.data)
  return response.data
}

const exportObject = { getFacultyCourse }

export default exportObject