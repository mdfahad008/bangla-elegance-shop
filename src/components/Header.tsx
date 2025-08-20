import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  currentLang: 'en' | 'bn';
  onLanguageChange: (lang: 'en' | 'bn') => void;
}

const Header = ({ currentLang, onLanguageChange }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: currentLang === 'en' ? 'Home' : 'হোম', href: '/' },
    { name: currentLang === 'en' ? 'Grocery' : 'মুদিখানা', href: '/grocery' },
    { name: currentLang === 'en' ? 'Clothing' : 'পোশাক', href: '/clothing' },
    { name: currentLang === 'en' ? 'Men' : 'পুরুষ', href: '/clothing/men' },
    { name: currentLang === 'en' ? 'Women' : 'মহিলা', href: '/clothing/women' },
    { name: currentLang === 'en' ? 'Children' : 'শিশু', href: '/clothing/children' },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with language switcher and cart */}
        <div className="flex justify-between items-center py-2 border-b border-border">
          <div className="text-sm text-muted-foreground">
            {currentLang === 'en' ? 'Welcome to our store' : 'আমাদের দোকানে স্বাগতম'}
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  {currentLang === 'en' ? 'English' : 'বাংলা'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onLanguageChange('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('bn')}>
                  বাংলা
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm" className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">
                {currentLang === 'en' ? 'Cart' : 'কার্ট'}
              </span>
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              {currentLang === 'en' ? 'BanglaShop' : 'বাংলাশপ'}
            </h1>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder={currentLang === 'en' ? 'Search products...' : 'পণ্য খুঁজুন...'}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <Button className="ml-2">
              {currentLang === 'en' ? 'Search' : 'খুঁজুন'}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                {/* Mobile search */}
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={currentLang === 'en' ? 'Search products...' : 'পণ্য খুঁজুন...'}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
                
                {/* Mobile navigation */}
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;