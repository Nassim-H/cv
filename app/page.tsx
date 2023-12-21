import Head from 'next/head'
import Home from "@/app/Home";
import Me from "@/app/Me";
import Projects from "@/app/Projects";
import Contact from "@/app/Contact";
import Footer from "@/app/Footer";
import Ambitious from "@/app/Ambitious";


export default function Page() {

    return (

        <div className="min-h-screen bg-black-100 py-10 px-3 sm:px-5 scroll-smooth">
            <Head>
                <title>Mon Portfolio</title>
                <meta name="description" content="Portfolio créé avec Next.js et Tailwind CSS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className="container mx-auto max-w-6xl text-center">
                <Home/>
                <Me/>
                <Projects/>
                <Ambitious/>
                <Contact/>
                <Footer/>

            </main>
        </div>
    )
}
