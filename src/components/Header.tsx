import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-muted/50 py-2 px-4 text-center">
        <p className="text-sm">
          <span className="font-semibold">Free Delivery & Returns</span> - Nike Members get free delivery and free 30-day returns.{" "}
          <Button variant="link" className="p-0 h-auto text-sm underline">
            Learn More
          </Button>
        </p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="font-bold text-2xl">NIKE</div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Button variant="ghost" className="font-medium">
              New & Featured
            </Button>
            <Button variant="ghost" className="font-medium">
              Men
            </Button>
            <Button variant="ghost" className="font-medium">
              Women
            </Button>
            <Button variant="ghost" className="font-medium">
              Kids
            </Button>
            <Button variant="ghost" className="font-medium">
              Sale
            </Button>
          </nav>

          {/* Search and actions */}
          <div className="flex items-center gap-3">
            {/* Search bar */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-40 lg:w-48 bg-muted/50 border-0 focus:bg-background focus:ring-1"
              />
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  2
                </Badge>
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};