import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | undefined> => {
  const res = await fetch(`${URL}/${id}`);
  const data = res.json();

  return data;
};

export default getProduct;
