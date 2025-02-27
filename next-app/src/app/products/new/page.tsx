import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { ProductForm } from './product-form';
import { getProduct } from '../products.api';

interface Props {
    params: {
        id: string;
    }
}
async function ProductNewPage({params}: Props) {
    console.log("Params recibidos nuevo:", params);
    //const product = await getProduct(params.id);
    const product = params.id ? await getProduct(params.id) : null;
    //console.log(product);
  return (
    <div className='h-screen flex justify-center items-center'>
        <Card>
            <CardHeader>
                <CardTitle>
                    {params.id ? 'Edit Product' : 'Create Product'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ProductForm product={product}  />
            </CardContent>
        </Card>
    </div>
  );
}
export default ProductNewPage;