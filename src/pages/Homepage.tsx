import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Homepage = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');

  // Sample data - in real app this would come from API
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Basmati Rice',
      nameBn: 'প্রিমিয়াম বাসমতী চাল',
      price: 120,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
      category: 'grocery',
      inStock: true,
      isOnSale: true,
    },
    {
      id: '2',
      name: 'Traditional Punjabi Suit',
      nameBn: 'ঐতিহ্যবাহী পাঞ্জাবী স্যুট',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=200&fit=crop',
      category: 'clothing',
      inStock: true,
    },
    {
      id: '3',
      name: 'Red Lentils (Masoor Dal)',
      nameBn: 'মসুর ডাল',
      price: 85,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop',
      category: 'grocery',
      inStock: true,
    },
    {
      id: '4',
      name: "Women's Elegant Saree",
      nameBn: 'মহিলাদের এলিগ্যান্ট শাড়ি',
      price: 1800,
      originalPrice: 2200,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop',
      category: 'clothing',
      inStock: true,
      isOnSale: true,
    },
  ];

  const categories = [
    {
      id: '1',
      name: 'Rice & Grains',
      nameBn: 'চাল ও দানাশস্য',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
      itemCount: 25,
      href: '/grocery/rice',
    },
    {
      id: '2',
      name: "Men's Clothing",
      nameBn: 'পুরুষদের পোশাক',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=200&fit=crop',
      itemCount: 45,
      href: '/clothing/men',
    },
    {
      id: '3',
      name: 'Spices & Seasonings',
      nameBn: 'মসলা ও সিজনিং',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop',
      itemCount: 35,
      href: '/grocery/spices',
    },
    {
      id: '4',
      name: "Women's Fashion",
      nameBn: 'মহিলাদের ফ্যাশন',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop',
      itemCount: 60,
      href: '/clothing/women',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' 
                ? 'Traditional Quality, Modern Convenience'
                : 'ঐতিহ্যবাহী মান, আধুনিক সুবিধা'
              }
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en'
                ? 'Shop authentic Bangladeshi groceries and traditional clothing from the comfort of your home'
                : 'আপনার ঘরের আরাম থেকে খাঁটি বাংলাদেশী মুদিখানা এবং ঐতিহ্যবাহী পোশাক কিনুন'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                {currentLang === 'en' ? 'Shop Groceries' : 'মুদিখানা কিনুন'}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                {currentLang === 'en' ? 'Browse Clothing' : 'পোশাক দেখুন'}
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {currentLang === 'en' ? 'Shop by Category' : 'ক্যাটাগরি অনুযায়ী দেখুন'}
              </h2>
              <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {currentLang === 'en' 
                  ? 'Discover our wide range of products'
                  : 'আমাদের বিস্তৃত পণ্যের পরিসর আবিষ্কার করুন'
                }
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  currentLang={currentLang}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner */} 
        <section className="py-8 bg-accent/10">
          <div className="container mx-auto px-4">
            <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-accent">
                  {currentLang === 'en' ? 'Special Offer' : 'বিশেষ অফার'}
                </Badge>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                  {currentLang === 'en' 
                    ? 'Free Delivery on Orders Over ৳500'
                    : '৳৫০০ এর উপরে অর্ডারে ফ্রি ডেলিভারি'
                  }
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                  {currentLang === 'en'
                    ? 'Valid until end of month. Terms and conditions apply.'
                    : 'মাসের শেষ পর্যন্ত বৈধ। শর্তাবলী প্রযোজ্য।'
                  }
                </p>
                <Button>
                  {currentLang === 'en' ? 'Shop Now' : 'এখনই কিনুন'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {currentLang === 'en' ? 'Featured Products' : 'ফিচার্ড পণ্য'}
              </h2>
              <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {currentLang === 'en' 
                  ? 'Hand-picked items just for you'
                  : 'আপনার জন্য বাছাই করা পণ্য'
                }
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currentLang={currentLang}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                {currentLang === 'en' ? 'View All Products' : 'সমস্ত পণ্য দেখুন'}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Homepage;