const ProductReview = async ({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {

    const { productId, reviewId } = await params
    return (
        <>
            <h1>Review {reviewId} of Product {productId}</h1>
        </>
    )
}

export default ProductReview;