import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pezqvjemqlxbxvsrzvbr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlenF2amVtcWx4Ynh2c3J6dmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwODU5MjUsImV4cCI6MjA1MzY2MTkyNX0.sTp9cJcXHEFd8ZOeUfYaVqgrL1SOM8ZzwUpFyFXwhx0'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;