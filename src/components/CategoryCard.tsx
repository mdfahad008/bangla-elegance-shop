import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  nameBn: string;
  image: string;
  itemCount: number;
  href: string;
}

interface CategoryCardProps {
  category: Category;
  currentLang: 'en' | 'bn';
}

const CategoryCard = ({ category, currentLang }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={category.image}
            alt={currentLang === 'en' ? category.name : category.nameBn}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {currentLang === 'en' ? category.name : category.nameBn}
              </h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {category.itemCount} {currentLang === 'en' ? 'items' : 'আইটেম'}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;