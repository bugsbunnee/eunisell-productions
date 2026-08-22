import { Search } from 'lucide-react';
import type { KnowledgeResourceStatus } from '../../../../services/knowledge-resource.service';
import { CATEGORY_OPTIONS } from './knowledge-form.constants';
import { Input } from '../../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';

interface KnowledgeListFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  status: KnowledgeResourceStatus | 'ALL';
  onStatusChange: (value: KnowledgeResourceStatus | 'ALL') => void;
}

const KnowledgeListFilters: React.FC<KnowledgeListFiltersProps> = ({ search, onSearchChange, category, onCategoryChange, status, onStatusChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative w-60">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Search" value={search} onChange={(e) => onSearchChange(e.target.value)} className="h-9 rounded-xl pl-9 shadow-xs" />
      </div>

      <Select value={category} onValueChange={onCategoryChange}>
        <SelectTrigger className="h-9 w-auto rounded-xl shadow-xs">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All categories</SelectItem>
          {CATEGORY_OPTIONS.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={(value) => onStatusChange(value as KnowledgeResourceStatus | 'ALL')}>
        <SelectTrigger className="h-9 w-auto rounded-xl shadow-xs">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All statuses</SelectItem>
          <SelectItem value="PUBLISHED">Published</SelectItem>
          <SelectItem value="DRAFT">Draft</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default KnowledgeListFilters;
