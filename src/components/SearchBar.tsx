
import { Input } from './ui/input';
import { Search, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Category } from '@/types/products';
import { Badge } from './ui/badge';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: Category | 'all';
  setSelectedCategory: (category: Category | 'all') => void;
  categories: Category[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}) => {
  return (
    <div className="sticky top-0 z-20 bg-white pb-2 pt-4 px-4 shadow-sm">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-gray-50 border-gray-200"
        />
      </div>
      
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        <Badge
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          className={`cursor-pointer ${
            selectedCategory === 'all' 
              ? 'bg-catalog-primary hover:bg-catalog-primary/90' 
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          Todos
        </Badge>
        
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`cursor-pointer whitespace-nowrap ${
              selectedCategory === category 
                ? 'bg-catalog-primary hover:bg-catalog-primary/90' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
