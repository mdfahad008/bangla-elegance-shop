import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Filter, Grid, List } from 'lucide-react';

const GroceryPage = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Items', nameBn: 'সমস্ত আইটেম' },
    { id: 'rice', name: 'Rice & Grains', nameBn: 'চাল ও দানাশস্য' },
    { id: 'spices', name: 'Spices', nameBn: 'মসলা' },
    { id: 'lentils', name: 'Lentils & Pulses', nameBn: 'ডাল ও শুঁটি' },
    { id: 'oil', name: 'Cooking Oil', nameBn: 'রান্নার তেল' },
    { id: 'snacks', name: 'Snacks', nameBn: 'স্ন্যাকস' },
    { id: 'tea', name: 'Tea & Beverages', nameBn: 'চা ও পানীয়' },
  ];

  const products = [
    {
      id: '1',
      name: 'Premium Basmati Rice 5kg',
      nameBn: 'প্রিমিয়াম বাসমতী চাল ৫ কেজি',
      price: 120,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
      category: 'rice',
      inStock: true,
      isOnSale: true,
    },
    {
      id: '2',
      name: 'Red Lentils (Masoor Dal) 1kg',
      nameBn: 'মসুর ডাল ১ কেজি',
      price: 85,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop',
      category: 'lentils',
      inStock: true,
    },
    {
      id: '3',
      name: 'Turmeric Powder 200g',
      nameBn: 'হলুদের গুঁড়া ২০০ গ্রাম',
      price: 45,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop',
      category: 'spices',
      inStock: true,
    },
    {
      id: '4',
      name: 'Mustard Oil 1L',
      nameBn: 'সরিষার তেল ১ লিটার',
      price: 180,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop',
      category: 'oil',
      inStock: true,
    },
    {
      id: '5',
      name: 'Black Tea Premium 250g',
      nameBn: 'কালো চা প্রিমিয়াম ২৫০ গ্রাম',
      price: 120,
      originalPrice: 140,
      image: 'https://images.unsplash.com/photo-1594631661960-44d13d5b346a?w=300&h=200&fit=crop',
      category: 'tea',
      inStock: true,
      isOnSale: true,
    },
    {
      id: '6',
      name: 'Mixed Chanachur 200g',
      nameBn: 'মিশ্র চানাচুর ২০০ গ্রাম',
      price: 65,
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=200&fit=crop',
      category: 'snacks',
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
            {currentLang === 'en' ? 'Grocery Items' : 'মুদিখানা পণ্য'}
          </h1>
          <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' 
              ? 'Fresh and authentic Bangladeshi grocery items delivered to your door'
              : 'তাজা এবং খাঁটি বাংলাদেশী মুদিখানা সামগ্রী আপনার দোরগোড়ায় পৌঁছান'
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

export default GroceryPage;