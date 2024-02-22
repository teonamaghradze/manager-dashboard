import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://awwgejlgtsfvrgrsmqgw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3d2dlamxndHNmdnJncnNtcWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1OTg3ODcsImV4cCI6MjAyNDE3NDc4N30.POlkzHy6UWMcc_LWIcxUgA9klXTeOTgiR7DlShD0V90";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
