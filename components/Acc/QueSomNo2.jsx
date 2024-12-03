
import Image from 'next/image';
import beauro from "@/public/images/beauro.jpg"
const QueSomNo2 = () => {
    return (
        <div className='w-full lg:h-[478px] bg-white flex flex-col lg:flex-row items-center md:px-[177px]  md:py-[75px] gap-6 '>
            <Image
                alt={"queSomNo"}
                height={1080}
                src={beauro}
                placeholder="blur"
                className="w-[340px] h-[212px] md:w-[586px] md:h-[328px] object-cover rounded-lg order-2 lg:order-1 mt-8 lg:mt-0"
                width={1980} />

            <div className='order-1 lg:order-2 flex flex-col items-center lg:items-start mt-8 lg:mt-0'>
                {/* <h1 className='text-[31px] md:text-[40px] text-primary-1 font-bold text-center lg:text-start  '>Qui somme nous ?</h1>
                <p className='w-3/4 lg:w-full text-[16px] md:text-[20px] mt-[28px] text-neutral-500 text-center lg:text-start font-inter font-light leading-[32px]' >Alrraid vous propose une large gamme de service en architecture <span className='hidden lg:block'> genie cevile et conception d’immobilier.</span></p> */}
                <h1 className='text-xl lg:text-4xl font-light text-neutral-700 '><span className='font-bold text-3xl lg:text-6xl text-green-500'>Herrama?</span>  Qui sommes-nous ?</h1>
                <p className='w-3/4 lg:w-full text-[16px] md:text-[20px] text-neutral-500 mt-6'>Herrama Cosmetics est une marque dédiée à la création de produits cosmétiques de haute qualité, inspirés par la nature et conçus avec soin pour répondre à vos attentes. Nos formules uniques allient ingrédients naturels et expertise scientifique pour offrir des solutions efficaces et sûres.</p>
            </div>
        </div>
    )
}

export default QueSomNo2