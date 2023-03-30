import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("rpg_item").select();
  return {
    rpg_item: data ?? [],
  };
}
      