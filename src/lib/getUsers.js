export const getAllUsers = async () => {
  const targetUrl = "https://jsonplaceholder.typicode.com/users/"

  const response = await fetch(targetUrl)

  return response.json()
}
