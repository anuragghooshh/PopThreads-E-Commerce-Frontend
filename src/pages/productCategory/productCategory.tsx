import { useContext, useEffect, useState } from 'react'
import Button from '../../components/button/button'
import Dropdown from '../../components/dropdown/dropdown'
import ItemCard from '../../components/itemCard/itemCard'
import './productCategory.scss'
import NavContext from '../../contexts/navContext'

interface Props {
    productCategoryName: string,
    categoryDescr: string,
    // categoryImg : string
}

const ProductCategory = (props: Props) => {
    const [top, setTop] = useState(0);
    const { navPos } = useContext(NavContext);

    useEffect(()=>{
        setTop(navPos);
    },[navPos])

    return (
        <div className="page" id="productCategory">
            <div className="categoryImg" />
            <section className="section" id='categoryStart'>
                <h2>{props.productCategoryName}</h2>
                <p>{props.categoryDescr}</p>
                <div className="typeSort">
                    <div className="left">
                        <Button type='filled' color='dark' text='Product Type 1' />
                        <Button type='filled' color='dark' text='Product Type 2' />
                        <Button type='filled' color='dark' text='Product Type 3' />
                        <Button type='filled' color='dark' text='Product Type 4' />
                    </div>
                    <Dropdown
                        buttonText='Sort By'
                        options={["Price", "Popularity", "Newest"]}
                    />
                </div>
            </section>
            <section className="section" id="productsList">
                <div
                    className={`filters ${top < -20 ? "adjust" : ""}`}
                >
                    <div>
                        <Dropdown
                            buttonText='Sort By'
                            options={["Price", "Popularity", "Newest"]}
                            mode='light'
                        />
                        <Dropdown
                            buttonText='Sort By'
                            options={["Price", "Popularity", "Newest"]}
                            mode='light'
                        />
                        <Dropdown
                            buttonText='Sort By'
                            options={["Price", "Popularity", "Newest"]}
                            mode='light'
                        />
                        <Dropdown
                            buttonText='Sort By'
                            options={["Price", "Popularity", "Newest"]}
                            mode='light'
                        />
                    </div>
                </div>
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
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                        <ItemCard
                            prodName='Product Name'
                            prodActPrice={2000}
                            prodPrice={1500}
                            prodRating={4}
                            prodReviews={1000}
                            colors={["#861E35", "#CED71D", "#6C9AD3"]}
                            sizes={["S", "M", "L"]}
                            type='default'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductCategory
