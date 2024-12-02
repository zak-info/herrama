import { Button, Card, CardFooter } from '@nextui-org/react'
import Image from 'next/image'


const ProductCard = ({img}) => {
    return (
        <div className=' w-full lg:w-auto p-6 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-lg'>
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <Image
                    alt="Woman listing to music"
                    className="w-60 lg:w-52 h-96 object-cover"
                    height={1980}
                    src={img}
                    placeholder='blur'
                    width={1080}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        Notify me
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductCard