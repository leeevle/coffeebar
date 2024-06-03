import ProductGroup from "@/app/productGroup";

const bouls = [
    { image: '/kitchen/bouls/healthy.png',      name: 'хелсі',    price: 185 },
    { image: '/kitchen/bouls/rise.png',         name: 'з рисом',  price: 159 },
    { image: '/kitchen/bouls/with_salmon.png',  name: 'з лососем',   price: 199 },
];

const breakfasts = [
    { image: '/kitchen/breakfasts/amer.png',       name: 'Американський',       price: 110 },
    { image: '/kitchen/breakfasts/english.png',    name: 'Англійський',     price: 110 },
    { image: '/kitchen/breakfasts/french.png',     name: 'Французький',  price: 130 },
]

const sandwiches = [
    { image: '/kitchen/sandwiches/sandwich_becon_sur.png',  name: 'Сендвіч з беконом та сиром', price: 85 },
    { image: '/kitchen/sandwiches/sandwich_chicken.png',    name: 'Сендвіч з куркою',  price: 99 },
]

export default function Kitchen() {
    return (    
        <div className="mt-[150px]">
            <h1 className="m-0 font-extrabold text-center leading-none tracking-wider text-[150px] m-0 relative mb-[5rem] uppercase">кухня</h1>

            <ProductGroup products={bouls} name='боули' />
            <ProductGroup products={breakfasts} name='сніданки' />
            <ProductGroup products={sandwiches}  name='сендвічі' />
        </div>
    )
}