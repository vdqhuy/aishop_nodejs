import React from 'react';

function BrandShopCate(props) {
    return (
        <div className='shop__cate'>
            <img src={"../../img/homeImg/" + props.img} alt='Shop Category Img'></img>
            <div className='shop-cate__title'>{props.title}</div>
            <a href='http://localhost:3000/' className='shop-cate__btn-link'>
                <button>
                    Go Shop
                </button>
            </a>
        </div>
    )
}

function HomeBrand() {
    return (
        <div className='home_brand'>
            <div className='grid'>
                <div className='brand__header'>
                    <h1>BRAND</h1>
                    <p>Prestigious beauty brand, reputation creates quality</p>
                </div>
                <div className='brand__shop'>
                    <BrandShopCate 
                        img="Picture7.png"
                        title="CLEANSER"
                    />
                    <BrandShopCate 
                        img="Picture1.png"
                        title="LIPSTICK"
                    />
                    <BrandShopCate 
                        img="Picture21.jpg"
                        title="SUNSCREEN"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeBrand