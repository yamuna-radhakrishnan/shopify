// Farm Buddy — Seed Script for Supabase
// Run: node scripts/seed-supabase.js
// Requires .env with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load env vars from .env
const envPath = resolve(__dirname, '..', '.env');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = Object.fromEntries(
  envContent
    .split('\n')
    .filter(Boolean)
    .map((line) => line.split('='))
    .map(([k, ...v]) => [k.trim(), v.join('=').trim()])
);

const supabaseUrl = envVars.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('ERROR: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Map of filename -> table name
const SEED_FILES = [
  { file: '../src/gprod.json', table: 'Grains' },
  { file: '../src/vprod.json', table: 'Vegetables' },
  { file: '../src/fprod.json', table: 'Fruits' },
  { file: '../src/sprod.json', table: 'Spices' },
  { file: '../src/nprod.json', table: 'Nuts' },
];

async function seedTable(filePath, tableName) {
  const raw = readFileSync(resolve(__dirname, filePath), 'utf-8');
  const items = JSON.parse(raw);

  // Map from JSON field names to Supabase column names
  const rows = items.map((item) => ({
    name: item.name,
    img_url: item.image || item.img_url || '',
    description: item.description || '',
    price: Number(item.price) || 0,
    amount: Number(item.amount) || 1,
    stock: Number(item.stock) || 0,
  }));

  console.log(`Seeding ${tableName}: ${rows.length} rows...`);

  // Insert in batches of 10 to avoid payload limits
  for (let i = 0; i < rows.length; i += 10) {
    const batch = rows.slice(i, i + 10);
    const { data, error } = await supabase.from(tableName).insert(batch).select();
    if (error) {
      console.error(`  ERROR inserting into ${tableName}:`, error.message);
      return false;
    }
    console.log(`  Inserted batch ${Math.floor(i / 10) + 1}/${Math.ceil(rows.length / 10)}`);
  }
  console.log(`  Done: ${rows.length} rows in ${tableName}`);
  return true;
}

async function seedFarmerProducts() {
  // Sample farmer products
  const samples = [
    { name: 'Organic Tomatoes', img_url: '/images/tomato.jpg', description: 'Freshly harvested organic tomatoes from Coimbatore farms.', price: 30, quantity: 100, farmer_name: 'Ramesh Kumar', location: 'Coimbatore, TN' },
    { name: 'Free Range Eggs', img_url: '/images/eggs.jpg', description: 'Farm-fresh free range eggs from free-grazing hens.', price: 8, quantity: 200, farmer_name: 'Lakshmi Devi', location: 'Salem, TN' },
    { name: 'Raw Honey', img_url: '/images/honey.jpg', description: 'Pure natural honey from the Western Ghats.', price: 350, quantity: 50, farmer_name: 'Murugan S', location: 'Theni, TN' },
  ];

  console.log(`Seeding farmer_products: ${samples.length} rows...`);
  const { data, error } = await supabase.from('farmer_products').insert(samples).select();
  if (error) {
    console.error('  ERROR inserting farmer_products:', error.message);
    return false;
  }
  console.log('  Done: farmer_products seeded');
  return true;
}

async function main() {
  console.log('=== Farm Buddy Supabase Seed ===\n');

  console.log(`Supabase URL: ${supabaseUrl}\n`);

  let allPassed = true;

  for (const { file, table } of SEED_FILES) {
    const ok = await seedTable(file, table);
    if (!ok) allPassed = false;
  }

  const fpOk = await seedFarmerProducts();
  if (!fpOk) allPassed = false;

  console.log('\n=== Seeding complete ===');
  if (allPassed) {
    console.log('All tables seeded successfully!');
  } else {
    console.error('Some tables encountered errors — check above.');
    process.exit(1);
  }
}

main();
