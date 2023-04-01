
<script>
  export let data;
  let { ach_7_roster } = data;
  console.log(ach_7_roster);
</script>

<h1> RPG Roster</h1>
<ul>
  {#each ach_7_roster as ach_7_roster}
    <li>{ach_7_roster.id}: {ach_7_roster.name}</li>
  {/each}
</ul>