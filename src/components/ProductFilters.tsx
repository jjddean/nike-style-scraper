import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FilterSection {
  title: string;
  items: { label: string; count?: number }[];
  isOpen: boolean;
}

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
  activeFilters: number;
}

export const ProductFilters = ({ onFilterChange, activeFilters }: ProductFiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filterSections, setFilterSections] = useState<FilterSection[]>([
    {
      title: "Gender",
      items: [{ label: "Men", count: 847 }, { label: "Unisex", count: 234 }],
      isOpen: true,
    },
    {
      title: "Shop By Price",
      items: [],
      isOpen: true,
    },
    {
      title: "Sale & Offers",
      items: [{ label: "Sale", count: 156 }, { label: "Member Exclusive", count: 89 }],
      isOpen: false,
    },
    {
      title: "Size",
      items: [
        { label: "XS" }, { label: "S" }, { label: "M" }, { label: "L" }, 
        { label: "XL" }, { label: "XXL" }
      ],
      isOpen: false,
    },
    {
      title: "Colour",
      items: [
        { label: "Black", count: 234 }, { label: "White", count: 189 },
        { label: "Grey", count: 156 }, { label: "Blue", count: 134 },
        { label: "Red", count: 98 }, { label: "Green", count: 67 }
      ],
      isOpen: false,
    },
    {
      title: "Sports",
      items: [
        { label: "Lifestyle", count: 345 }, { label: "Running", count: 234 },
        { label: "Training & Gym", count: 189 }, { label: "Football", count: 156 }
      ],
      isOpen: false,
    },
    {
      title: "Brand",
      items: [
        { label: "Nike Sportswear", count: 234 }, { label: "Nike Running", count: 189 },
        { label: "Jordan", count: 156 }, { label: "Nike Pro", count: 134 }
      ],
      isOpen: false,
    },
  ]);

  const toggleSection = (index: number) => {
    setFilterSections(prev => 
      prev.map((section, i) => 
        i === index ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  return (
    <div className="w-full lg:w-64 space-y-1">
      {/* Filter header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-headline">Filters</h2>
        {activeFilters > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All ({activeFilters})
          </Button>
        )}
      </div>

      {/* Filter sections */}
      <div className="space-y-1">
        {filterSections.map((section, index) => (
          <Card key={section.title} className="border-0 shadow-none">
            <Collapsible open={section.isOpen} onOpenChange={() => toggleSection(index)}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between h-12 px-4 font-medium hover:bg-muted/50"
                >
                  {section.title}
                  {section.isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="px-4 pb-4">
                {section.title === "Shop By Price" ? (
                  <div className="space-y-4">
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={200}
                        min={0}
                        step={5}
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>£{priceRange[0]}</span>
                      <span>£{priceRange[1]}+</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <Checkbox id={`${section.title}-${itemIndex}`} />
                        <label
                          htmlFor={`${section.title}-${itemIndex}`}
                          className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            {item.count && (
                              <span className="text-muted-foreground">({item.count})</span>
                            )}
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
            
            {index < filterSections.length - 1 && <Separator />}
          </Card>
        ))}
      </div>
    </div>
  );
};