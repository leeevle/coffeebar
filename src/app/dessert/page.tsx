import ProductGroup from "@/app/productGroup";

const desserts = [
    { image: '/dessert/cheesecake.png',     name: 'Чизкейк',            price: 90 },
    { image: '/dessert/choco_dessert.png',  name: 'Шоколадний десерт',  price: 140 },
    { image: '/dessert/macaroon.png',       name: 'Макарон',            price: 55 },
    { image: '/dessert/tiramisu.png',       name: 'Тирамісу',           price: 99 },
    { image: '/dessert/cake.png',           name: 'Тістечко',           price: 70 },
];


export default function Dessert() {
    return (
        <div className="mt-[150px]">
            <h1 className="m-0 font-extrabold text-center leading-none tracking-wider text-[150px] m-0 relative mb-[5rem] uppercase">десерти</h1>

            <ProductGroup products={desserts} name='' />
        </div>
    )
}