import Image from "next/image";
import styles from "@/app/ui/home.module.css"
import Link from 'next/link'

function PhotoMenuItem({ src, label, width, height, page_src}) {
  return (
    <div className="w-[400px]">
      <Link href={page_src}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={label}
        />
      </Link>

      <a className="mt-6" href={page_src}> {label} </a>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <div className="mt-36">
        <h2 className="text-[48px] font-light">Кав’ярня на вулиці Шиллера</h2>

        <div className="font-extrabold leading-none tracking-wider text-[200px] m-0 relative mb-[30rem] uppercase">
          <h1 className="m-0">coffeebar</h1>
          <h1 className="m-0">меню</h1>
           <Image
            src="/main/gallery/top_coffee.png"
            width="750"
            height="750"
            className="absolute top-12 right-0"
            alt="Picture of the author"
          />
        </div>

        <div className={styles.menuItemsFlexContainer}>
          <PhotoMenuItem src="/main/icon/bar.png"     label="Бар"     width="200" height="100" page_src="bar"/>
          <PhotoMenuItem src="/main/icon/kitchen.png" label="Кухня"   width="600" height="350" page_src="kitchen"/>
          <PhotoMenuItem src="/main/icon/dessert.png" label="Десерти" width="250" height="350" page_src="dessert"/>
        </div>

        <div className={styles.gallery}>
          <div>
            <Image
              src="/main/gallery/1.png"
              width="650"
              height="400"
              alt="Picture of the author"
            />
          </div>
          <div className="mt-52">
            <Image
              src="/main/gallery/2.png"
              width="650"
              height="400"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
