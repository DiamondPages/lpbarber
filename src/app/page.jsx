'use client';
import dynamic from 'next/dynamic';
import brights from '../assets/backgrounds/desktop/brights.webp'
import Home from '@/components/Pages/Home/Home';
import Footer from '@/components/Pages/Footer/Footer';

export default function Page() {

    const ProblemsPage = dynamic(()=>import('@/components/Pages/Problems/Problems'))
    const SolutionPage = dynamic(()=>import('@/components/Pages/Solution/Solution'))
    const DepositionsPage = dynamic(()=>import('@/components/Pages/Depositions/Depositions'))
    const GuaranteePage = dynamic(()=>import('@/components/Pages/Guarantee/Guarantee'))
    const OfferPage = dynamic(()=>import('@/components/Pages/Offer/Offer'))
    const AboutPage = dynamic(()=>import('@/components/Pages/About/About'))
    const FaqPage = dynamic(()=>import('@/components/Pages/Faq/Faq'))

  return (
    <main style={{backgroundImage: `url(${brights.src})`}}>
        <Home/>
        <ProblemsPage/>
        <SolutionPage/>
        <DepositionsPage/>
        <GuaranteePage/>
        <OfferPage/>
        <AboutPage/>
        <FaqPage/>
        <Footer/>
    </main>

  )
}
