import ProductGroup from "@/app/productGroup";

const hot_coffee = [
    { image: '/bar/espresso.png',   name: 'Еспресо', price: 35 },
    { image: '/bar/americano.png',  name: 'Американо', price: 45 },
    { image: '/bar/cappuccino.png', name: 'Капучино', price: 45 },
    { image: '/bar/latte.png',      name: 'Лате', price: 55 },
    { image: '/bar/mokko.png',      name: 'Мокко', price: 65 },
    { image: '/bar/flatwhite.png',  name: 'Флетвайт', price: 65 }
];

const ice_coffee = [
    { image: '/bar/icelatte.png',   name: 'Айс лате', price: 85 },
    { image: '/bar/orange.png',     name: 'Оранж кава', price: 90 },
    { image: '/bar/tonik.png',      name: 'Еспресо тонік', price: 90 },
]

const no_coffee = [
    { image: '/bar/cacao.png',  name: 'какао', price: 55 },
    { image: '/bar/tea.png',    name: 'чай в асортименті', price: 45 },
    { image: '/bar/matcha.png', name: 'матча', price: 65 },
]

export default function Bar() {
    return (
        <div className="mt-[150px]">
            <h1 className="m-0 font-extrabold text-center leading-none tracking-wider text-[150px] m-0 relative mb-[5rem] uppercase">бар</h1>

            <ProductGroup products={hot_coffee} name='гаряча кава' />
            <ProductGroup products={ice_coffee} name='холодна кава' />
            <ProductGroup products={no_coffee}  name='не кава' />
        </div>
    )
}