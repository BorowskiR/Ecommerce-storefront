'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Color, Size } from '@/types';
import { useSearchParams, useRouter } from 'next/navigation';
import qs from 'query-string';

interface FilterProps {
  data: (Size | Color)[];
  valueKey: string;
  name: string;
}

export const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex items-center gap-2 flex-wrap">
        {data.map((v) => (
          <Button
            key={v.id}
            onClick={() => onClick(v.id)}
            className={cn(
              'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
              selectedValue === v.id && 'bg-black text-white'
            )}
          >
            {v.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
