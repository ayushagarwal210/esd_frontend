import axios from 'axios'

// The API endpoint where bills are located
const Url = `http://localhost:8080/academic-1.0-SNAPSHOT/api/student/get`

const getStudent = async (courseID) => {
  const response = await axios.get(`${Url}/${courseID}`)
  return response.data
}



const exportObject = { getStudent }

export default exportObject