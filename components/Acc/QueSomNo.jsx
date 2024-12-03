
import Image from 'next/image';
import r1 from "@/public/images/r1.jpg"
import r2 from "@/public/images/r2.jpg"

const QueSomNo = () => {
    return (
        <div className='w-full lg:min-h-[478px] bg-white flex flex-col lg:flex-row items-center md:px-[177px] py-12  md:py-[75px] gap-6 '>
           
            <div className=' flex flex-col items-center lg:items-start w-full lg:w-1/2 ps-6 lg:ps-0 '>
                {/* <h1 className='text-[31px] md:text-[40px] text-primary-1 font-bold text-center lg:text-start  '>Qui somme nous ?</h1>
                <p className='w-3/4 lg:w-full text-[16px] md:text-[20px] mt-[28px] text-neutral-500 text-center lg:text-start font-inter font-light leading-[32px]' >Alrraid vous propose une large gamme de service en architecture <span className='hidden lg:block'> genie cevile et conception d’immobilier.</span></p> */}
                <h1 className='text-xl lg:text-4xl font-light text-neutral-700 '>Un Accueil Chaleureux Chez Herrama Cosmetics</h1>
                <p className='w-3/4 lg:w-full text-[16px] md:text-[20px] text-neutral-500 mt-6'>Située à Khemis Khechna - Boumerdes, Herrama Cosmetics vous ouvre ses portes dans un espace moderne et accueillant. Nous croyons que chaque visite doit être une expérience agréable et mémorable.</p>
            </div>
            <div className='relative w-full lg:w-1/2 flex flex-col items-center gap-4'>
            <Image
                alt={"queSomNo"}
                height={1080}
                src={r1}
                placeholder="blur"
                className=" w-[340px] h-[212px] md:w-[586px] md:h-[328px] object-cover  mt-8 lg:mt-0"
                width={1980} />
            <Image
                alt={"queSomNo"}
                height={1080}
                src={r2}
                placeholder="blur"
                className="   w-[340px] h-[212px] md:w-[586px] md:h-[328px] object-cover mt-8 lg:mt-0"
                width={1980} />
            </div>
        </div>
    )
}

export default QueSomNo