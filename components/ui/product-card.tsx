'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/types';
import { IconButton } from './icon-button';
import { Expand, ShoppingBag } from 'lucide-react';
import { MouseEventHandler } from 'react';
import { Currency } from './currency';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer border rounded-xl p-3 space-y-4"
    >
      {/* Images and actions */}
      <div className="aspect-square relative bg-gray-100 rounded-xl">
        <Image
          src={data.images?.[0].url}
          fill
          alt=""
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingBag size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
