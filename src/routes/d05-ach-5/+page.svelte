<script>
  export let data;
  let { rpg_item } = data;
  console.log(rpg_item);
</script>

<h1>RPG Players</h1>
<ul>
  {#each rpg_item as rpg_item}
    <li>{rpg_item.id}: {rpg_item.name}</li>
  {/each}
</ul>