import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

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

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <Card className="product-card group overflow-hidden border-0 shadow-none">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              New
            </Badge>
          )}
          {product.isSustainable && (
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
              Sustainable Materials
            </Badge>
          )}
        </div>

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-accent text-accent' : 'text-primary'}`} />
        </Button>

        {/* Quick add button */}
        <Button
          variant="default"
          size="sm"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 bg-primary hover:bg-primary/90"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      <div className="p-4 space-y-3">
        {/* Product info */}
        <div className="space-y-1">
          <p className="text-caption text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-base leading-tight hover:text-accent transition-colors cursor-pointer">
            {product.name}
          </h3>
        </div>

        {/* Colors */}
        {product.colors.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {product.colors.length} Colour{product.colors.length > 1 ? 's' : ''}
            </span>
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    selectedColor === index ? 'border-primary scale-110' : 'border-border'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(index)}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground ml-1">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">£{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              £{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};