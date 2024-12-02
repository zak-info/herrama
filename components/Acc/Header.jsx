import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"



const Header = () => {
    return (
        <div className="absolute w-full h-20 flex items-center justify-between px-6 bg-white/50 backdrop-blur-lg">
            <span className="text-xl font-extrabold text-green-500 ">Herrama</span>
            <ul className="hidden lg:flex items-center gap-4">
                <li className="text-lg font-light">Maison</li>
                <li className="text-lg font-light">Apropos </li>
                <li className="text-lg font-light">Produits</li>
                <li className="text-lg font-light">Contacts</li>
            </ul>
            <div className="flex items-center gap-4">
                <a href="#" className="px-6 py-4 rounded-full bg-green-500 text-white text-lg"> Login</a>
                <a href="#" className="hidden lg:block px-6 py-4 rounded-full bg-green-500 text-white text-lg"> Registrer</a>

            </div>

        </div>
    )
}

export default Header