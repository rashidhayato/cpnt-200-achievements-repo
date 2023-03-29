export const load = async ({ fetch }) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  
  const apiData = await response.json();

  return {
    albums: apiData
  }
}  