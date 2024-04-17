import ItemCard from '../../components/itemCard/itemCard';
import './favorites.scss';

const Favorites = () => {
    return (
        <div className="page" id='favorites'>
            <div className="section">
                <h2>Favorites</h2>
                <div className="products">
                    <div className="productscontainer">
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='favorite'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites
