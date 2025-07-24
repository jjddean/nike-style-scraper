import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid3X3, Grid2X2, List } from "lucide-react";
import { useState } from "react";

interface ProductHeaderProps {
  totalProducts: number;
  onSortChange: (sort: string) => void;
  onViewChange: (view: 'grid' | 'list') => void;
  onFilterToggle: () => void;
  currentView: 'grid' | 'list';
}

export const ProductHeader = ({ 
  totalProducts, 
  onSortChange, 
  onViewChange, 
  onFilterToggle,
  currentView 
}: ProductHeaderProps) => {
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large');

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      {/* Left side - Title and count */}
      <div className="space-y-1">
        <h1 className="text-display">Men's Clothing</h1>
        <p className="text-muted-foreground">({totalProducts})</p>
      </div>

      {/* Right side - Controls */}
      <div className="flex items-center gap-3">
        {/* Mobile filter button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onFilterToggle}
          className="lg:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>

        {/* Sort dropdown */}
        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>

        {/* View toggle */}
        <div className="hidden sm:flex items-center border rounded-lg">
          <Button
            variant={currentView === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('grid')}
            className="rounded-r-none border-r"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={currentView === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('list')}
            className="rounded-l-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};