<script>
  export let data;
  console.log(data.albums)
 </script>
 
 <h1>albums</h1>

{#each data.albums as album }
  <article>
    <a href="/02-ach2/albums/{album.id}"> {album.title}</a>
  </article>


{/each}
