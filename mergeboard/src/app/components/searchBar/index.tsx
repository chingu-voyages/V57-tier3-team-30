import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon, X } from 'lucide-react'
import React from 'react'

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear?: () => void
  loading: boolean
};

const SearchBar: React.FC<SearchBarProps> = ({ onChange, onSubmit, value, onClear, loading }) => {
  return (
    <>
    <div className='flex flex-row justify-center items-center gap-2'>
      <div className='flex border border-[#D9D9D9] w-[400px] rounded-3xl justify-start items-center px-3 py-1'>
        <SearchIcon />
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder='Start typing here' className='border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none focus-visible:ring-0 ' />
        <button
          onClick={() => {
            onChange('')
            if (onClear) onClear()
          }}
          className="flex items-center gap-2 px-1 py-1 text-sm font-medium text-white hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
      <Button type='submit' className='rounded-3xl px-6 py-3' onClick={onSubmit}>Search</Button>
    </div>
     {loading && (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span className="hidden sm:block">Fetching data</span>
        </>
      )}
    </>
  )
}

export default SearchBar