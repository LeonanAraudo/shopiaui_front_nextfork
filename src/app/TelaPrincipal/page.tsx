"use client"
import Header from "./componentesPrincipal/header/page"
import SplideComponent from './componentesPrincipal/slide/slides'
import CategoriasType from './componentesPrincipal/categorias/categorias'
import { Open_Sans } from 'next/font/google'
import SlideProdutos from './componentesPrincipal//slideProdutos/slideProdutos'
import ExibFooter from './componentesPrincipal/footer/footer'
import Image from "next/image"
export const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function TelaPrincipal(){
    return(
        <div className={OpenSans.className}>
            <header>
                <Header/>
            </header>
            <div>
              <SplideComponent/>
            </div>
            <div>
                <CategoriasType/>
            </div>
            <div>
                <SlideProdutos/>
            </div>
            <div>

            </div>
            <footer>
                <ExibFooter/>
            </footer>
        </div>
    )
}