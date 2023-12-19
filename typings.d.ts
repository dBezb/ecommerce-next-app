type Product = {
  map(arg0: (product: Product) => React.JSX.Element): React.ReactNode;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
