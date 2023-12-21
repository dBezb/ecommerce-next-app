import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const product: Product = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">Deals of the day</h1>
        {product.map((product: Product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
