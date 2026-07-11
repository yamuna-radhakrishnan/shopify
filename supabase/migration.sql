-- ============================================================
-- Farm Buddy — Supabase Migration: Tables + RLS Policies
-- Run this in the Supabase Dashboard SQL Editor
-- ============================================================

-- 1. PRODUCT TABLES
-- Using img_url to match component code (ele.img_url)

-- Note: PostgreSQL folds unquoted names to lowercase.
-- The API client queries lowercase names (grains, vegetables, etc.)
CREATE TABLE IF NOT EXISTS grains (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  img_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price NUMERIC(10, 2) NOT NULL,
  amount INTEGER DEFAULT 1,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS vegetables (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  img_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price NUMERIC(10, 2) NOT NULL,
  amount INTEGER DEFAULT 1,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS fruits (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  img_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price NUMERIC(10, 2) NOT NULL,
  amount INTEGER DEFAULT 1,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS spices (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  img_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price NUMERIC(10, 2) NOT NULL,
  amount INTEGER DEFAULT 1,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS nuts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  img_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price NUMERIC(10, 2) NOT NULL,
  amount INTEGER DEFAULT 1,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. FARMER PRODUCT TABLE (replaces PocketBase)
CREATE TABLE IF NOT EXISTS farmer_products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  img_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  quantity INTEGER DEFAULT 0,
  farmer_name TEXT DEFAULT '',
  location TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ROW LEVEL SECURITY
ALTER TABLE grains ENABLE ROW LEVEL SECURITY;
ALTER TABLE vegetables ENABLE ROW LEVEL SECURITY;
ALTER TABLE fruits ENABLE ROW LEVEL SECURITY;
ALTER TABLE spices ENABLE ROW LEVEL SECURITY;
ALTER TABLE nuts ENABLE ROW LEVEL SECURITY;
ALTER TABLE farmer_products ENABLE ROW LEVEL SECURITY;

-- 4. PUBLIC READ POLICIES (anyone can view products)

CREATE POLICY "Anyone can view grains" ON grains
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view vegetables" ON vegetables
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view fruits" ON fruits
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view spices" ON spices
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view nuts" ON nuts
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view farmer products" ON farmer_products
  FOR SELECT USING (true);

-- 5. INSERT POLICIES (for seeding and public submissions)

CREATE POLICY "Anyone can add grains" ON grains
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can add vegetables" ON vegetables
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can add fruits" ON fruits
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can add spices" ON spices
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can add nuts" ON nuts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can add farmer products" ON farmer_products
  FOR INSERT WITH CHECK (true);

-- 6. HELPER: indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_grains_name ON grains(name);
CREATE INDEX IF NOT EXISTS idx_vegetables_name ON vegetables(name);
CREATE INDEX IF NOT EXISTS idx_fruits_name ON fruits(name);
CREATE INDEX IF NOT EXISTS idx_spices_name ON spices(name);
CREATE INDEX IF NOT EXISTS idx_nuts_name ON nuts(name);
CREATE INDEX IF NOT EXISTS idx_farmer_products_name ON farmer_products(name);

-- 7. USER PROFILES TABLE
-- Syncs automatically when a user signs up via the trigger below
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  avatar_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can view/edit their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'phone', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', '')
  );
  RETURN NEW;
END;
$$;

-- Trigger the function every time a user is created
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
