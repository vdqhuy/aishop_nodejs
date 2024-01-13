import React from 'react';

function ProductsCard(props) {
    return (
        <div className='products__card'>
            <img src={'../../img/homeImg/' + props.img} alt='Product card img'></img>
            <h3 className='card__title'>{props.title}</h3>
            <p className='card__description'>{props.description.substring(0, 100) + "..."}</p>
            <span className='card_review'>{props.review}</span>
        </div>
    )
}

function BestSalesProducts() {
    return (
        <div className='best-sales__products'>
            <ProductsCard 
                img="Picture10.png"
                title="Matte Lipstick BBIA Last Velvet Tip Tint Version 5 Official Store"
                description="Bbia Last Velvet Lip Tint is a matte lipstick with extremely high adhesion, 
                    attracts to your lips like a magnet and gives clear color after just one application."
                review="Review(152)"
            />
            <ProductsCard 
                img="Picture1.png"
                title="Matte Lipstick BBIA Last Velvet Tip Tint Version 5 Official Store"
                description="Bbia Last Velvet Lip Tint is a matte lipstick with extremely high adhesion, 
                    attracts to your lips like a magnet and gives clear color after just one application."
                review="Review(152)"
            />
            <ProductsCard 
                img="Picture12.png"
                title="Matte Lipstick BBIA Last Velvet Tip Tint Version 5 Official Store"
                description="Bbia Last Velvet Lip Tint is a matte lipstick with extremely high adhesion, 
                    attracts to your lips like a magnet and gives clear color after just one application."
                review="Review(152)"
            />
        </div>
    )
}

function HomeBestSales() {
    return (
        <div className='home__best-sales'>
            <div className='grid'>
                <div className='best-sales__header'>
                    <h1>SELLING PRODUCT</h1>
                    <p>Some best-selling products are of interest in the market</p>
                </div>
                <BestSalesProducts />
            </div>
        </div>
    )
}

export default HomeBestSales