import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vyfxtgakpyqdcstkirtt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5Znh0Z2FrcHlxZGNzdGtpcnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MjI5MDAsImV4cCI6MjAyNDE5ODkwMH0.WaiKBrZFAp1s0gqYorBjyNPiPywBK2nfRbw-k5QUjCY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
