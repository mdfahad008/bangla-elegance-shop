import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  name: string;
  nameBn: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  isOnSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  currentLang: 'en' | 'bn';
}

const ProductCard = ({ product, currentLang }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 border-border">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={currentLang === 'en' ? product.name : product.nameBn}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {product.isOnSale && (
            <Badge className="absolute top-2 left-2 bg-destructive">
              {currentLang === 'en' ? 'Sale' : 'সেল'}
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-medium" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                {currentLang === 'en' ? 'Out of Stock' : 'স্টকে নেই'}
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' ? product.name : product.nameBn}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-primary">৳{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ৳{product.originalPrice}
              </span>
            )}
          </div>
          
          <Button 
            className="w-full gap-2" 
            size="sm"
            disabled={!product.inStock}
            variant={product.inStock ? "default" : "secondary"}
          >
            <ShoppingCart className="w-4 h-4" />
            <span style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {product.inStock 
                ? (currentLang === 'en' ? 'Add to Cart' : 'কার্টে যোগ করুন')
                : (currentLang === 'en' ? 'Out of Stock' : 'স্টকে নেই')
              }
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;