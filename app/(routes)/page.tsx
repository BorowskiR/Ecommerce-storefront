import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('e2af30f-c54e-4740-ac45-bd24b63628ef');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px lg:px-8 px-4">
          <ProductList items={products} title="Featured products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
