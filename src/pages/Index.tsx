import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductHeader } from "@/components/ProductHeader";
import { ProductFilters } from "@/components/ProductFilters";
import { ProductGrid } from "@/components/ProductGrid";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterChange = (filters: any) => {
    // In a real app, this would update the filter state and refetch products
    console.log('Filters changed:', filters);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    // In a real app, this would trigger a re-sort of products
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    setCurrentView(view);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block flex-shrink-0">
            <ProductFilters 
              onFilterChange={handleFilterChange}
              activeFilters={activeFilters}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <ProductHeader
              totalProducts={1308}
              onSortChange={handleSortChange}
              onViewChange={handleViewChange}
              onFilterToggle={toggleMobileFilters}
              currentView={currentView}
            />
            
            <ProductGrid view={currentView} />
          </div>
        </div>

        {/* Mobile Filters Sheet */}
        <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
          <SheetContent side="left" className="w-80 p-0">
            <div className="p-6">
              <ProductFilters 
                onFilterChange={handleFilterChange}
                activeFilters={activeFilters}
              />
            </div>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
};

export default Index;
