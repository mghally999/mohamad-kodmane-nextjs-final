// test-production.js - Production Testing Script
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync, writeFileSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test production environment
console.log("🧪 Testing Production Environment Locally...\n");

// Check if .env.local exists, if not create it from your current env
const envLocalPath = join(__dirname, ".env.local");
if (!existsSync(envLocalPath)) {
  console.log("📝 Creating .env.local file for production testing...");

  const envContent = `# Production Environment Test
NODE_ENV=production

# Email Configuration for Etisalat/Hostinger
EMAIL_USER=info@mohamadkodmani.ae
EMAIL_PASS="Mo,1987,"
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
EMAIL_SECURE=true

# Recipients
ADMIN_EMAIL=info@mohamadkodmani.ae
NEXT_PUBLIC_WHATSAPP_NUMBER=971566665560

# Respond.io API Token
RESPONDIO_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgzMzAsInNwYWNlSWQiOjM0MjA3OSwib3JnSWQiOjMzNzM4OSwidHlwZSI6ImFwaSIsImlhdCI6MTc2MzQ4NjM0OH0.DhdCMQ8GpYgg_TJkB8VY4nuLsY0cEE8eX87iQaVzRBQ
`;

  writeFileSync(envLocalPath, envContent);
  console.log("✅ .env.local created successfully!\n");
} else {
  console.log("✅ .env.local already exists\n");
}

console.log("🚀 To test production locally, run:");
console.log("   npm run dev:production");
console.log("\n📋 This will:");
console.log("   • Set NODE_ENV=production");
console.log("   • Use your production environment variables");
console.log("   • Run the development server in production mode");
console.log("   • Test emails and Respond.io with real credentials");
console.log("\n🔧 After testing, you can safely deploy to production!");
