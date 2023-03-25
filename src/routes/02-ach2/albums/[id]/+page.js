
export const load = async ({fetch, params}) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);

  const albumData  = await response.json();
  
console.log(params)
  return {
   album: albumData
  }
}