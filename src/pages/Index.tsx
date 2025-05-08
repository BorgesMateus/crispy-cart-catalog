
import React, { useState, useEffect } from 'react';
import { CartProvider } from '../contexts/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Category } from '../types/products';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Cart from '../components/Cart';
import CartToggle from '../components/CartToggle';
import { normalizeText } from '@/utils/stringUtils';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Filter products based on search term and selected category
  useEffect(() => {
    let result = PRODUCTS;
    
    // Filter by category if not "all"
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term with accent-insensitive search
    if (searchTerm) {
      const normalizedTerm = normalizeText(searchTerm);
      result = result.filter(product => 
        normalizeText(product.name).includes(normalizedTerm) || 
        (product.description && normalizeText(product.description).includes(normalizedTerm))
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-red-600 text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Catálogo Interativo</h1>
            <p className="text-center opacity-90 mt-1">Os melhores produtos da região</p>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="container mx-auto pb-24">
          {/* Search and Filter */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={CATEGORIES}
          />
          
          {/* Products Grid */}
          <div className="p-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-500">Nenhum produto encontrado</h2>
                <p className="text-gray-400 mt-2">Tente uma busca diferente ou outra categoria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-100 py-6 border-t">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Catálogo Interativo. Todos os direitos reservados.</p>
          </div>
        </footer>
        
        {/* Cart Toggle Button */}
        <CartToggle />
        
        {/* Cart Sidebar */}
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
