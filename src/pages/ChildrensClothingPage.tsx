import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Grid, List } from 'lucide-react';

const ChildrensClothingPage = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Items', nameBn: 'সমস্ত আইটেম' },
    { id: 'boys', name: 'Boys', nameBn: 'ছেলেদের' },
    { id: 'girls', name: 'Girls', nameBn: 'মেয়েদের' },
    { id: 'punjabi', name: 'Punjabi Set', nameBn: 'পাঞ্জাবী সেট' },
    { id: 'frock', name: 'Frocks', nameBn: 'ফ্রক' },
    { id: 'casual', name: 'Casual Wear', nameBn: 'ক্যাজুয়াল পোশাক' },
  ];

  const products = [
    {
      id: '1',
      name: 'Kids Traditional Punjabi Set',
      nameBn: 'শিশুদের ঐতিহ্যবাহী পাঞ্জাবী সেট',
      price: 800,
      originalPrice: 1000,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop',
      category: 'boys',
      inStock: true,
      isOnSale: true,
    },
    {
      id: '2',
      name: 'Beautiful Party Frock',
      nameBn: 'সুন্দর পার্টি ফ্রক',
      price: 650,
      image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&h=200&fit=crop',
      category: 'girls',
      inStock: true,
    },
    {
      id: '3',
      name: 'Cotton Casual Shirt Set',
      nameBn: 'কটন ক্যাজুয়াল শার্ট সেট',
      price: 450,
      image: 'https://images.unsplash.com/photo-1564463836146-4e2e2e5b7e02?w=300&h=200&fit=crop',
      category: 'casual',
      inStock: true,
    },
    {
      id: '4',
      name: 'Traditional Girls Kameez',
      nameBn: 'ঐতিহ্যবাহী মেয়েদের কামিজ',
      price: 750,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop',
      category: 'girls',
      inStock: true,
    },
    {
      id: '5',
      name: 'Boys Formal Punjabi',
      nameBn: 'ছেলেদের ফর্মাল পাঞ্জাবী',
      price: 950,
      image: 'https://images.unsplash.com/photo-1564463836146-4e2e2e5b7e02?w=300&h=200&fit=crop',
      category: 'punjabi',
      inStock: true,
    },
    {
      id: '6',
      name: 'Designer Kids Lehenga',
      nameBn: 'ডিজাইনার শিশু লেহেঙ্গা',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&h=200&fit=crop',
      category: 'girls',
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
            {currentLang === 'en' ? "Children's Clothing" : 'শিশুদের পোশাক'}
          </h1>
          <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' 
              ? 'Adorable and comfortable clothing for children with traditional Bangladeshi styles'
              : 'ঐতিহ্যবাহী বাংলাদেশী স্টাইলের সাথে শিশুদের জন্য আকর্ষণীয় এবং আরামদায়ক পোশাক'
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

export default ChildrensClothingPage;