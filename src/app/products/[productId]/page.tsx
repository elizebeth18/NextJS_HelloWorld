import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productId}`);
        }, 100)
    });
    return {
        title: `Product ${title}`
    }
}

const ProductDetail = async ({ params }: {
    params: Promise<{ productId: string }>
}) => {

    const productId = (await params).productId
    return (
        <>
            <h1>Details about Product {productId}</h1>
        </>
    )
}

export default ProductDetail;