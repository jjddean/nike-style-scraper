import { ProductCard } from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  badge?: string;
  isNew?: boolean;
  isSustainable?: boolean;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tech Fleece Windrunner Full-Zip Jacket",
    category: "Nike Tech",
    price: 109.99,
    image: product1,
    colors: ["#000000", "#2D2D2D", "#FFFFFF"],
    isNew: false,
    isSustainable: true,
  },
  {
    id: "2",
    name: "Impossibly Light Windrunner Running Jacket",
    category: "Nike Running",
    price: 99.99,
    image: product2,
    colors: ["#FF0000", "#000000", "#FFFFFF", "#2D2D2D", "#0066CC", "#00AA00"],
    isNew: true,
    isSustainable: true,
  },
  {
    id: "3",
    name: "Form Dri-FIT 18cm Unlined Versatile Shorts",
    category: "Nike Form",
    price: 39.99,
    image: product3,
    colors: ["#2D2D2D"],
    isNew: false,
    isSustainable: true,
  },
  {
    id: "4",
    name: "Club Fleece Pullover Hoodie",
    category: "Nike Sportswear",
    price: 54.99,
    originalPrice: 74.99,
    image: product4,
    colors: ["#000080", "#000000", "#FFFFFF", "#8B4513"],
    isNew: false,
    isSustainable: false,
  },
  {
    id: "5",
    name: "Dri-FIT Academy Training Top",
    category: "Nike Academy",
    price: 32.99,
    image: product5,
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    isNew: true,
    isSustainable: true,
  },
  {
    id: "6",
    name: "Pro Dri-FIT Training Tights",
    category: "Nike Pro",
    price: 44.99,
    image: product6,
    colors: ["#000000", "#2D2D2D"],
    isNew: false,
    isSustainable: false,
  },
];

interface ProductGridProps {
  view: 'grid' | 'list';
}

export const ProductGrid = ({ view }: ProductGridProps) => {
  // Duplicate products to show more items
  const products = [...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS];

  if (view === 'list') {
    return (
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`} className="border rounded-lg p-4 flex gap-4">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div>
                <p className="text-caption text-muted-foreground">{product.category}</p>
                <h3 className="font-semibold text-lg">{product.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xl">£{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {product.colors.length > 1 && (
                <p className="text-sm text-muted-foreground">
                  {product.colors.length} Colour{product.colors.length > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={`${product.id}-${index}`} product={product} />
      ))}
    </div>
  );
};