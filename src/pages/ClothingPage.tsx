import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const ClothingPage = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');

  const clothingCategories = [
    {
      id: '1',
      name: "Men's Clothing",
      nameBn: 'পুরুষদের পোশাক',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=300&fit=crop',
      itemCount: 45,
      href: '/clothing/men',
    },
    {
      id: '2',
      name: "Women's Clothing",
      nameBn: 'মহিলাদের পোশাক',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
      itemCount: 60,
      href: '/clothing/women',
    },
    {
      id: '3',
      name: "Children's Clothing",
      nameBn: 'শিশুদের পোশাক',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
      itemCount: 35,
      href: '/clothing/children',
    },
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Traditional Punjabi Suit',
      nameBn: 'ঐতিহ্যবাহী পাঞ্জাবী স্যুট',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=200&fit=crop',
      category: 'men',
      inStock: true,
    },
    {
      id: '2',
      name: 'Elegant Cotton Saree',
      nameBn: 'এলিগ্যান্ট কটন শাড়ি',
      price: 1800,
      originalPrice: 2200,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop',
      category: 'women',
      inStock: true,
      isOnSale: true,
    },
    {
      id: '3',
      name: 'Kids Traditional Outfit',
      nameBn: 'শিশুদের ঐতিহ্যবাহী পোশাক',
      price: 800,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop',
      category: 'children',
      inStock: true,
    },
    {
      id: '4',
      name: 'Silk Kameez for Women',
      nameBn: 'মহিলাদের জন্য সিল্ক কামিজ',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop',
      category: 'women',
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' ? 'Traditional Clothing' : 'ঐতিহ্যবাহী পোশাক'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' 
              ? 'Discover our beautiful collection of traditional Bangladeshi clothing for men, women, and children'
              : 'পুরুষ, মহিলা এবং শিশুদের জন্য আমাদের সুন্দর ঐতিহ্যবাহী বাংলাদেশী পোশাকের সংগ্রহ আবিষ্কার করুন'
            }
          </p>
        </div>

        {/* Clothing Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' ? 'Shop by Category' : 'ক্যাটাগরি অনুযায়ী দেখুন'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clothingCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                currentLang={currentLang}
              />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' ? 'Featured Clothing' : 'ফিচার্ড পোশাক'}
            </h2>
            <p className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' 
                ? 'Handpicked traditional outfits for every occasion'
                : 'প্রতিটি অনুষ্ঠানের জন্য হস্তনির্বাচিত ঐতিহ্যবাহী পোশাক'
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
            <Button size="lg" variant="outline">
              {currentLang === 'en' ? 'View All Clothing' : 'সমস্ত পোশাক দেখুন'}
            </Button>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
};

export default ClothingPage;