import { supabase } from "../lib/supabase";

export async function signUp(email, password, username, fullName) {
  if (!supabase) {
    return {
      data: null,
      error: new Error(
        "Supabase is not configured. Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values."
      ),
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
        full_name: fullName,
      },
    },
  });

  return { data, error };
}
export async function signIn(email, password) {
  if (!supabase) {
    return {
      data: null,
      error: new Error(
        "Supabase is not configured. Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values."
      ),
    };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export async function signOut() {
  if (!supabase) {
    return { error: null };
  }

  const { error } = await supabase.auth.signOut();
  return { error };
}