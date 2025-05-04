'use client'
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-red-50 min-h-screen">
      <Head>
        <title>HAMMAD ABBASI | Digital Marketing Expert</title>
        <meta name="description" content="Professional Digital Marketing Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}