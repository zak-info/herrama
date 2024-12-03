import React from 'react'
import Header from './Header'
import SectionOne from './SectionOne'
import SectionTow from './SectionTow'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'

import i1 from "@/public/images/i1.jpg"
import i2 from "@/public/images/i2.jpg"
import i3 from "@/public/images/i3.jpg"
import Footer from './Footer'
import QueSomNo from './QueSomNo'
import QueSomNo2 from './QueSomNo2'
import Partners from './Partners'
import Services from './Services'
const Landing = () => {
    return (
        <div className='w-screen min-h-screen hide-scrollbar overflow-x-hidden overflow-y-scroll'>
            <Header />
            <SectionOne />
            <QueSomNo />
            <QueSomNo2 />
            <Services />
            <Partners />
            <SectionTow />
            <SectionFive />
            <SectionFour img={i1} title={" Une qualité irréprochable"} paragraphe={"Nos produits sont conçus avec une attention particulière aux détails, en utilisant des ingrédients hautement performants et respectueux de votre peau. Chaque formule est testée pour garantir des résultats visibles et durables. "} dir={"ltr"} x={-75} bg={"bg-gradient-to-b from-green-500 to-green-400"} />
            <SectionFour img={i2} title={"Une offre pour toute la famille"} paragraphe={"Que vous soyez un homme, une femme ou que vous cherchiez des soins doux pour vos bébés, Herrama Cosmetics propose des solutions adaptées à tous les âges et à tous les besoins. Nous croyons que chacun mérite des soins de qualité, quels que soient son style de vie ou ses préférences. "} dir={"rtl"} x={75} bg={"bg-gradient-to-b from-violet-400 to-violet-500"} />
            <SectionFour img={i3} title={"Une expertise à votre service"} paragraphe={"Grâce à notre expérience et à notre passion pour l’innovation, nous vous offrons des produits qui allient efficacité, élégance et naturalité. Rejoignez des milliers de clients satisfaits qui nous font déjà confiance."} dir={"ltr"} x={-75} bg={"bg-gradient-to-b from-pink-400 to-pink-500"} />
            <SectionSix />
            <Footer />
        </div>
    )
}

export default Landing