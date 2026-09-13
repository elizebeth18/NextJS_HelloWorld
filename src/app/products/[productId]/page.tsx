import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params
    return {
        title: `Product ${productId}`
    }
}

const ProductDetail = async ({ params }: { params: Promise<{ productId: string }>
}) => {

    const productId = (await params).productId
    return (
        <>
            <h1>Details about Product {productId}</h1>
        </>
    )
}

export default ProductDetail;