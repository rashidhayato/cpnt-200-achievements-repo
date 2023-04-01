// import { supabase } from "$lib/supabaseClient";

// export async function load() {
//   const { data } = await supabase.from("rpg_item").select();
//   return {
//     rpg_item: data ?? [],
//   };
// }




import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("ach_7_roster").select();
  return {
    ach_7_roster: data ?? [],
  };
}
          