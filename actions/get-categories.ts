import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[] | undefined> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (erorr) {
    console.log('GET_CATEGORIES');
  }
};

export default getCategories;
