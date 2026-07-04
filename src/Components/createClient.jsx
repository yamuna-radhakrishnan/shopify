import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pjttirccmobgenhxbmee.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdHRpcmNjbW9iZ2VuaHhibWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNDY0MDUsImV4cCI6MjA5ODcyMjQwNX0.-FnEUUKfLYKtgRBFpxiIfppKgk6F9Kues7u7g5-xoDE'

export const SupaBase = createClient(supabaseUrl, supabaseAnonKey)
