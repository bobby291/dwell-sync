import Image from "next/image";
import Link from "next/link";

type ShopCategoryCardProps = {
  name: string;
  slug: string;
  image: string;
};

export default function ShopCategoryCard({
  name,
  slug,
  image,
}: ShopCategoryCardProps) {
  return (
    <Link
      href={`/shop/category/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-md"
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="h-32 w-full object-cover transition group-hover:scale-105"
      />

      <div className="p-3 text-center">
        <h3 className="font-semibold text-slate-900">{name}</h3>
        <span className="mt-1 inline-block text-sm text-blue-600">
          Explore products →
        </span>
      </div>
    </Link>
  );
}