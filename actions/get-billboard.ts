import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | undefined> => {
  //const billboardData = await fetch(`${URL}/${id}`);
  try {
    const billboardData = await fetch(
      `http://localhost:3000/api/61329f4d-17d9-4bd9-b2bf-b136debf0881/billboards/2e2af30f-c54e-4740-ac45-bd24b63628ef`
    );

    return billboardData.json();
  } catch (err) {
    console.log(err);
  }
};

export default getBillboard;
