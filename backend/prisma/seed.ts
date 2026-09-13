// Backend seed script — populates the database with sample product data.
// Fetches products from DummyJSON (https://dummyjson.com), a free public API.
// Run with: bunx tsx prisma/seed.ts

import { PrismaClient } from "@prisma/client";

// Initialize Prisma client to connect to the database
const prisma = new PrismaClient();

// DummyJSON product API response shape
interface DummyProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
}

async function main() {
  console.log("Starting database seed with data from DummyJSON...\n");

  // Step 1: Fetch all category slugs from DummyJSON.
  // The /products/category-list endpoint returns a plain string array.
  console.log("Fetching categories from DummyJSON...");
  const res = await fetch("https://dummyjson.com/products/category-list");
  if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);

  // Each category is just a string slug like "beauty", "fragrances", etc.
  const categorySlugs: string[] = await res.json();

  // Map external category slug -> database category ID.
  // We'll need this to link products to their categories.
  const categoryMap = new Map<string, string>();

  // Limit to first 10 categories to keep seed data manageable
  const slugsToSeed = categorySlugs.slice(0, 10);

  for (const slug of slugsToSeed) {
    // Convert slug to a display name: "mens-shirts" -> "Mens Shirts"
    const name = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    // Check if this category already exists in our database (idempotent)
    const existing = await prisma.category.findUnique({
      where: { slug },
    });

    if (existing) {
      console.log(`Category already exists: ${name}`);
      categoryMap.set(slug, existing.id);
    } else {
      // Create new category record in the database
      const created = await prisma.category.create({
        data: { name, slug },
      });
      console.log(`Created category: ${name}`);
      categoryMap.set(slug, created.id);
    }
  }

  // Step 2: Fetch and seed products from each category.
  // We fetch 5 products per category to keep the dataset reasonable.
  console.log("\nFetching products from DummyJSON...");

  let totalProducts = 0;
  let skippedProducts = 0;

  for (const slug of slugsToSeed) {
    console.log(`\nSeeding category: ${slug}...`);

    // Fetch 5 products for this category from DummyJSON.
    // We only request the fields we need to reduce payload size.
    const productsRes = await fetch(
      `https://dummyjson.com/products/category/${slug}?limit=5&select=title,description,price,category,thumbnail,images`,
    );
    if (!productsRes.ok) {
      console.log(`  Skipped (API error ${productsRes.status})`);
      continue;
    }

    const productsData = await productsRes.json();
    const dummyProducts: DummyProduct[] = productsData.products || [];

    for (const dummy of dummyProducts) {
      // Generate a URL-friendly slug from the product title.
      // "iPhone 15 Pro Max" -> "iphone-15-pro-max"
      const productSlug = dummy.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      // Skip if product slug already exists (idempotent seeding)
      const existing = await prisma.product.findUnique({
        where: { slug: productSlug },
      });

      if (existing) {
        skippedProducts++;
        continue;
      }

      // Convert USD price to Naira (₦) — approximate rate of 1500 per USD
      const nairaPrice = Math.round(dummy.price * 1500);

      // Create the product record in the database.
      // stockQty is random between 10-110 for demo purposes.
      const createdProduct = await prisma.product.create({
        data: {
          name: dummy.title,
          slug: productSlug,
          description: dummy.description,
          price: nairaPrice,
          stockQty: Math.floor(Math.random() * 100) + 10,
          active: true,
          categoryId: categoryMap.get(slug),
        },
      });

      // Create product image records — use the thumbnail plus up to 3 extra images.
      // Each image is a separate row linked to the product.
      const imageUrls = [dummy.thumbnail, ...dummy.images.slice(0, 3)];

      for (const url of imageUrls) {
        await prisma.productImage.create({
          data: {
            url,
            productId: createdProduct.id,
          },
        });
      }

      totalProducts++;
      console.log(`  Created: ${dummy.title} (₦${nairaPrice.toLocaleString()})`);
    }
  }

  console.log(`\nSeed completed!`);
  console.log(`  Categories: ${categoryMap.size}`);
  console.log(`  Products created: ${totalProducts}`);
  console.log(`  Products skipped (already exist): ${skippedProducts}`);
}

// Execute the seed function, then disconnect from the database.
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
