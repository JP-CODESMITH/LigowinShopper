import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    let products: any[] = [];

    try {
      if (category && category !== "all") {
        const categoryRecord = await db.orm.public.Category.first({
          slug: category,
        });

        if (categoryRecord) {
          products = await db.orm.public.Product.all({
            categoryId: categoryRecord.id,
            active: true,
          });
        }
      } else {
        products = await db.orm.public.Product.all({
          active: true,
        });
      }
    } catch {
      return NextResponse.json([]);
    }

    if (!Array.isArray(products)) products = [];

    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          (p.description && p.description.toLowerCase().includes(searchLower))
      );
    }

    const productsWithRelations = await Promise.all(
      products.map(async (product: any) => {
        let category = null;
        let images: any[] = [];

        try {
          if (product.categoryId) {
            category = await db.orm.public.Category.first({ id: product.categoryId });
          }
          images = await db.orm.public.ProductImage.all({ productId: product.id });
        } catch {
          // relations unavailable
        }

        if (!Array.isArray(images)) images = [];

        return {
          ...product,
          category,
          images,
        };
      })
    );

    return NextResponse.json(productsWithRelations);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json([]);
  }
}
