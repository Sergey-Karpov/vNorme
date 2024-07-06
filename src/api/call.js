export const getApiData = async () => {
  const apiUrl = 'https://swapi.dev/api/films/'

  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
