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

export default ProductDetail