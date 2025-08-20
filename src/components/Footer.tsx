import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  currentLang: 'en' | 'bn';
}

const Footer = ({ currentLang }: FooterProps) => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {currentLang === 'en' ? 'BanglaShop' : 'বাংলাশপ'}
            </h3>
            <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' 
                ? 'Your trusted store for quality groceries and traditional clothing with modern convenience.'
                : 'আধুনিক সুবিধার সাথে মানসম্পন্ন মুদিখানা এবং ঐতিহ্যবাহী পোশাকের জন্য আপনার বিশ্বস্ত দোকান।'
              }
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' ? 'Contact Us' : 'যোগাযোগ'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                  {currentLang === 'en' 
                    ? '123 Market Street, Dhaka 1000, Bangladesh'
                    : '১২৩ মার্কেট স্ট্রিট, ঢাকা ১০০০, বাংলাদেশ'
                  }
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+880 1XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@banglashop.com</span>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' ? 'Store Hours' : 'দোকানের সময়'}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                    {currentLang === 'en' ? 'Saturday - Thursday' : 'শনিবার - বৃহস্পতিবার'}
                  </div>
                  <div className="font-medium">9:00 AM - 9:00 PM</div>
                </div>
              </div>
              <div className="text-sm ml-7">
                <div className="text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
                  {currentLang === 'en' ? 'Friday' : 'শুক্রবার'}
                </div>
                <div className="font-medium">2:00 PM - 9:00 PM</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
              {currentLang === 'en' ? 'Follow Us' : 'আমাদের ফলো করুন'}
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: currentLang === 'bn' ? 'Anek Bangla, sans-serif' : 'Inter, sans-serif' }}>
            {currentLang === 'en' 
              ? '© 2024 BanglaShop. All rights reserved.'
              : '© ২০২ৄ বাংলাশপ। সমস্ত অধিকার সংরক্ষিত।'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;