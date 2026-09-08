const ListProductReviews = async ({ params }: {
    params: Promise<{ productId: string }>
}) => {
    const { productId } = await params
    return (
        <>
            <h1>List of Reviews of Product {productId}</h1>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </>
    )
}

export default ListProductReviews;