import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Grid, List } from 'lucide-react';

const MensClothingPage = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Items', nameBn: 'সমস্ত আইটেম' },
    { id: 'punjabi', name: 'Punjabi', nameBn: 'পাঞ্জাবী' },
    { id: 'pant', name: 'Pants', nameBn: 'প্যান্ট' },
    { id: 'shirt', name: 'Shirts', nameBn: 'শার্ট' },
    { id: 'kurta', name: 'Kurta', nameBn: 'কুর্তা' },
    { id: 'formal', name: 'Formal Wear', nameBn: 'ফর্মাল পোশাক' },
  ];

  const products = [
    {
      id: '1',
      name: 'Traditional White Punjabi',
      nameBn: 'ঐতিহ্যবাহী সাদা পাঞ্জাবী',
      price: 2500,
      originalPrice: 3000,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=200&fit=crop',
      category: 'punjabi',
      inStock: true,
      isOnSale: true,
    },
    {
      id: '2',
      name: 'Cotton Kurta Set',
      nameBn: 'কটন কুর্তা সেট',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1506629905237-f1b2ac1c8f62?w=300&h=200&fit=crop',
      category: 'kurta',
      inStock: true,
    },
    {
      id: '3',
      name: 'Formal Cotton Shirt',
      nameBn: 'ফর্মাল কটন শার্ট',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=200&fit=crop',
      category: 'formal',
      inStock: true,
    },
    {
      id: '4',
      name: 'Traditional Pajama',
      nameBn: 'ঐতিহ্যবাহী পায়জামা',
      price: 800,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop',
      category: 'pant',
      inStock: true,
    },
    {
      id: '5',
      name: 'Embroidered Punjabi',
      nameBn: 'সূচিকর্মের পাঞ্জাবী',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=200&fit=crop',
      category: 'punjabi',
      inStock: true,
    },
    {
      id: '6',
      name: 'Casual Cotton Shirt',
      nameBn: 'ক্যাজুয়াল কটন শার্ট',
      price: 950,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=200&fit=crop',
      category: 'shirt',
      inStock: false,
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' ? "Men's Clothing" : 'পুরুষদের পোশাক'}
          </h1>
          <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' 
              ? 'Traditional and modern clothing for men with authentic Bangladeshi craftsmanship'
              : 'খাঁটি বাংলাদেশী কারুকাজ সহ পুরুষদের জন্য ঐতিহ্যবাহী এবং আধুনিক পোশাক'
            }
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                  <Filter className="w-4 h-4" />
                  {currentLang === 'en' ? 'Categories' : 'ক্যাটাগরি'}
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                      style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}
                    >
                      {currentLang === 'en' ? category.name : category.nameBn}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground">
                {filteredProducts.length} {currentLang === 'en' ? 'products found' : 'পণ্য পাওয়া গেছে'}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currentLang={currentLang}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                  {currentLang === 'en' 
                    ? 'No products found in this category'
                    : 'এই ক্যাটাগরিতে কোন পণ্য পাওয়া যায়নি'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
};

export default MensClothingPage;