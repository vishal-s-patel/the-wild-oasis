import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jifttlxfvovqwxgohoju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZnR0bHhmdm92cXd4Z29ob2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNTkxMDIsImV4cCI6MjA0MTczNTEwMn0.Y87OBoQWgu0IXRgTPTXG1-hGbC1EFoMFGklCAWgmhkc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
