// Farm Buddy — Seed Script for Supabase (CommonJS version)
// Run: node scripts/seed-supabase.cjs
// Requires dotenv for .env loading

const { createClient } = require('@supabase/supabase-js');
const { readFileSync, existsSync } = require('fs');
const { resolve } = require('path');

// Try to load .env manually
const envPath = resolve(__dirname, '..', '.env');
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').filter(Boolean).forEach((line) => {
    const [key, ...vals] = line.split('=');
    process.env[key.trim()] = vals.join('=').trim();
  });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('ERROR: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const SEED_FILES = [
  { file: '../src/gprod.json', table: 'grains' },
  { file: '../src/vprod.json', table: 'vegetables' },
  { file: '../src/fprod.json', table: 'fruits' },
  { file: '../src/sprod.json', table: 'spices' },
  { file: '../src/nprod.json', table: 'nuts' },
];

async function seedTable(filePath, tableName) {
  const raw = readFileSync(resolve(__dirname, filePath), 'utf-8');
  const items = JSON.parse(raw);

  const rows = items.map((item) => ({
    name: item.name,
    img_url: item.image || item.img_url || '',
    description: item.description || '',
    price: Number(item.price) || 0,
    amount: Number(item.amount) || 1,
    stock: Number(item.stock) || 0,
  }));

  console.log(`Seeding ${tableName}: ${rows.length} rows...`);

  for (let i = 0; i < rows.length; i += 10) {
    const batch = rows.slice(i, i + 10);
    const { data, error } = await supabase.from(tableName).insert(batch).select();
    if (error) {
      console.error(`  ERROR inserting into ${tableName}:`, error.message);
      return false;
    }
    console.log(`  Batch ${Math.floor(i / 10) + 1}/${Math.ceil(rows.length / 10)} OK`);
  }
  return true;
}

async function seedFarmerProducts() {
  const samples = [
    { name: 'Organic Tomatoes', img_url: '/images/tomato.jpg', description: 'Fresh organic tomatoes from Coimbatore.', price: 30, quantity: 100, farmer_name: 'Ramesh Kumar', location: 'Coimbatore, TN' },
    { name: 'Free Range Eggs', img_url: '/images/eggs.jpg', description: 'Farm-fresh free range eggs.', price: 8, quantity: 200, farmer_name: 'Lakshmi Devi', location: 'Salem, TN' },
    { name: 'Raw Honey', img_url: '/images/honey.jpg', description: 'Pure natural honey from Western Ghats.', price: 350, quantity: 50, farmer_name: 'Murugan S', location: 'Theni, TN' },
  ];
  const { error } = await supabase.from('farmer_products').insert(samples);
  if (error) { console.error('ERROR farmer_products:', error.message); return false; }
  console.log('farmer_products seeded');
  return true;
}

async function main() {
  console.log('=== Farm Buddy Supabase Seed ===\n');
  let allOk = true;
  for (const { file, table } of SEED_FILES) { if (!(await seedTable(file, table))) allOk = false; }
  if (!(await seedFarmerProducts())) allOk = false;
  console.log(allOk ? '\nAll tables seeded!' : '\nSome errors occurred.');
  process.exit(allOk ? 0 : 1);
}

main();
