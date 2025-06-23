import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wbhhdsxolgxdjsqcahkr.supabase.co'; // replace with yours
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiaGhkc3hvbGd4ZGpzcWNhaGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MTkzNzUsImV4cCI6MjA2NTk5NTM3NX0.A-dXa-N-hglTW7z6OeUmptxtOH15w2qX51v6qz_hsmo'; // replace with your anon public key

export const supabase = createClient(supabaseUrl, supabaseKey);