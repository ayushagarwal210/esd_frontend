import axios from 'axios'

// The API endpoint where login data is sent to
const loginBaseUrl = `http://localhost:8080/academic-1.0-SNAPSHOT/api/faculty/login`

const login = async (credentials) => {
  const response = await axios.post(loginBaseUrl, credentials)
  return response.data
}

const exportObject = { login }
export default exportObject