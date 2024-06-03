'use client'

import Link from 'next/link'
import { usePathname  } from 'next/navigation';
import Image from "next/image";

function isHomePage() {
    return usePathname() === '/';
}

function GoMainPage() {
    return (
        <Link className="mr-auto" href = '/'>
            <Image
             width = '50'
             height= '50'
             src='/navigation/back_to_home.svg'
             alt='back to home page'
            />
        </Link>
    )
}

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="font-light flex justify-between flex-row pl-[200px] pr-[200px]">
                <div className='flex items-center w-[500px]'>
                    {!isHomePage() ? GoMainPage() : ''}
                </div>

                <div className="flex justify-center w-[500px]">
                    <span>
                        <Link className="px-6" href="bar">Бар</Link>
                    </span>
                    <span>
                        <Link className="px-6" href="kitchen">Кухня</Link>
                    </span>
                    <span>
                        <Link className="px-6" href="dessert">Десерти</Link>
                    </span>
                </div>

                <div className="flex w-[500px] flex-col self-center items-end">
                    <Image
                        width = '50'
                        height= '50'
                        src='/navigation/cart.svg'
                        alt='shopping cart'
                    />
                </div>
            </nav>
        </header>
    );
}