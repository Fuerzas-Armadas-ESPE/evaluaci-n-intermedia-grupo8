import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bdvqyafbthbxmmvxxvds.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdnF5YWZidGhieG1tdnh4dmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NjEyMjMsImV4cCI6MjAyMjIzNzIyM30.xbhF8-HG2XlVQGqF41Y6QXCiaMpmeSUZfxWerQ_okZ4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)