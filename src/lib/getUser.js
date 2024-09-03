export const getUser = async (id) => {
  const targetURL = `https://jsonplaceholder.typicode.com/users/${id}`

  const response = await fetch(targetURL)
  return response.json()
}
