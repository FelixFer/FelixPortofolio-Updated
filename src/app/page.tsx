"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { RxArrowTopRight } from 'react-icons/rx'
import hangulClassification from '../../public/img/hangul-prediction.png'
import djongWeather from '../../public/img/djong-weather.png'
import seiyou from '../../public/img/seiyou.png'
import quicRecipe from '../../public/img/quickrecipe.png'
import gebetApp from '../../public/img/gebetApp.png';
import gebetApp1 from '../../public/img/gebetApp1.png'
import gebetApp2 from '../../public/img/gebetApp2.png'
import gebetApp3 from '../../public/img/gebetApp3.png'
import gebetApp4 from '../../public/img/gebetApp4.png'
import sandYay1 from '../../public/img/sandYay1.png'
import sandYay2 from '../../public/img/sandYay2.png'
import sandYay3 from '../../public/img/sandYay3.png'
import sandYay4 from '../../public/img/sandYay4.png'
import hangul1 from '../../public/img/hangul1.jpg'
import hangul2 from '../../public/img/hangul2.jpg'
import hangul3 from '../../public/img/hangul3.jpg'
import ocr from '../../public/img/ocr.png'
import ocr1 from '../../public/img/ocr1.jpg'
import ocr2 from '../../public/img/ocr2.jpg'
import ocr3 from '../../public/img/ocr3.jpg'
import ocr4 from '../../public/img/ocr4.jpg'
import ocr5 from '../../public/img/ocr5.jpg'
import ocr6 from '../../public/img/ocr6.jpg'
import ocr7 from '../../public/img/ocr7.jpg'
import ocr8 from '../../public/img/ocr8.jpg'
import Modal1 from './components/modal1';
import Carousel1 from './components/carousel1';
import Modal2 from './components/modal2';
import Carousel2 from './components/carousel2';
import Modal3 from './components/modal3';
import Carousel3 from './components/carousel3';
import Modal4 from './components/modal4';
import Carousel4 from './components/carousel4';
import SocialIcons from './components/SocialIcons';
import Description from './components/Description';
import Footer from './components/Footer';
import axios from 'axios';
import { IPokemon } from './interface/IPokemon';
import Pokedex from './components/Pokedex';

const slides1 = [hangul1, hangul2, hangul3]
const slides2 = [gebetApp1, gebetApp2, gebetApp3, gebetApp4]
const slides3 = [sandYay1, sandYay2, sandYay3, sandYay4]
const slides4 = [ocr1, ocr2, ocr3, ocr4, ocr5, ocr6, ocr7, ocr8]

export default function Home() {
  const [activeLink, setActiveLink] = useState('about');
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [openPokedex, setOpenPokedex] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemon[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: IPokemon[] = [];
        for (let i = 1; i < 152; i++) {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}/`
          );
          const { id, abilities, name, types, sprites, stats } = response.data;
          const pokemonInfo: IPokemon = { id, abilities, name, types, sprites, stats };
          data.push(pokemonInfo);
        }
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = (modalType: number) => {
    if (modalType === 1) setOpen1(true);
    if (modalType === 2) setOpen2(true);
    if (modalType === 3) setOpen3(true);
    if (modalType === 4) setOpen4(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='lg:min-h-screen lg:grid lg:grid-cols-[45%_55%] bg-gradient-to-br from-indigo-950 to-slate-950 py-5 lg:p-0'>
      <aside className='sm:mx-10 lg:h-screen lg:sticky lg:top-0 lg:pt-20 lg:px-20 lg:flex lg:flex-col px-5'>
        <h1 className="text-center lg:text-left text-slate-200 text-3xl sm:text-4xl lg:text-5xl my-6 lg:mt-0 font-bold cursor-pointer lg:after:block lg:after:content-[''] lg:after:absolute lg:after:h-[5px] lg:after:bg-slate-200 lg:after:w-52 lg:after:scale-x-0 lg:after:hover:scale-x-100 after:transition after:duration-300 lg:after:origin-left" onClick={() => setOpenPokedex(true)}>Felix Ferdinand</h1>
        <h2 className='text-center lg:text-left text-slate-300 sm:text-xl lg:text-xl xl:text-2xl'>Backend Developer</h2>
        <h3 className='text-center lg:text-left text-slate-400 sm:text-sm lg:text-md xl:text-lg'>Graduate of Informatics Engineering from Universitas Multimedia Nusantara</h3>
        {/* <i className='text-slate-600 mb-20 lg:mb-0 sm:mx-10 lg:mx-0'>&quot;Once you start and its hard to stop, thats what you call addiction.&quot;</i> */}
        <div className='my-auto hidden lg:block'>
          <ul className='text-slate-500 font-bold'>
            <li className={`my-4 hover:text-slate-300 hover:tracking-widest cursor-pointer transition-all ${activeLink === 'about' ? 'text-slate-300 tracking-widest' : ''}`}><a href="#about">About</a></li>
            <li className={`my-4 hover:text-slate-300 hover:tracking-widest cursor-pointer transition-all ${activeLink === 'experience' ? 'text-slate-300 tracking-widest' : ''}`}><a href="#experience">Experience</a></li>
            <li className={`my-4 hover:text-slate-300 hover:tracking-widest cursor-pointer transition-all ${activeLink === 'project' ? 'text-slate-300 tracking-widest' : ''}`}><a href="#project">Project</a></li>
          </ul>
        </div>
        <SocialIcons />
      </aside>
      <main className='lg:pb-20 lg:pr-20'>
        <section className='lg:pt-20 lg:mx-5' id='about'>
          <nav className='sticky top-0 drop-shadow backdrop-blur-3xl px-5 z-50 lg:hidden'>
            <h4 className='text-center text-slate-300 font-bold mb-8 py-2 sm:mx-10'>ABOUT</h4>
          </nav>
          <Description />
        </section>

        <section className='lg:pt-20' id='experience'>
          <nav className='sticky top-0 drop-shadow backdrop-blur-3xl px-5 z-50 lg:hidden'>
            <h4 className='text-center text-slate-300 font-bold mb-8 py-2 sm:mx-10'>EXPERIENCE</h4>
          </nav>
          <div className='mb-20 px-5 lg:mb-0 sm:mx-10 lg:ml-0'>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>Sep 2023 — Present</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:mt-0 hover:text-teal-400 lg:hover:text-slate-300'>Backend Developer · PT Ganda Visi Jayatama</p>
                <p className='text-slate-400 text-sm mb-2'>Part Time</p>
                <p className='text-slate-500 text-sm'>• Create Restful API using Express.js and Sequelize.</p>
                <p className='text-slate-500 text-sm'>• Testing API using Postman.</p>
                <p className='text-slate-500 text-sm'>• Design database schema using dbdiagram.</p>
                <p className='text-slate-500 text-sm'>• Migration and seeding database using Sequelize and PostgreSQL.</p>
                <p className='text-slate-500 text-sm mb-3'>• Collaborating on version control code using git.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Express.js</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Sequelize</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Typescript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Javascript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>PostgreSQL</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Node.js</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Git</li>
                </ul>
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>Feb 2023 — June 2023</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:mt-0 hover:text-teal-400 lg:hover:text-slate-300'>Lab Assistant · Lab FTI Universitas Multimedia Nusantara</p>
                <p className='text-slate-400 text-sm mb-2'>Part Time</p>
                <p className='text-slate-500 text-sm'>Teaching Introduction to Internet Technology course:</p>
                <p className='text-slate-500 text-sm'>• Create basic website.</p>
                <p className='text-slate-500 text-sm mb-3'>• Create website using CSS and JavaScript framework.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>HTML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Bootstrap</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>jQuery</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>ReactJS</li>
                </ul>
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>Aug 2022 — Dec 2022</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:mt-0 hover:text-teal-400 lg:hover:text-slate-300'>Mobile Developer · PT Central Artificial Intelligence</p>
                <p className='text-slate-400 text-sm mb-2'>Internship</p>
                <p className='text-slate-500 text-sm'>• Create a mobile application using React Native as the Frontend based on the design given in Figma.</p>
                <p className='text-slate-500 text-sm'>• Maintaining and update Central OCR mobile application.</p>
                <p className='text-slate-500 text-sm mb-3'>• Collaborating on version control code using git.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>React Native</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Git</li>
                </ul>
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>Nov 2021 — Apr 2022</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:mt-0 hover:text-teal-400 lg:hover:text-slate-300'>Website Developer · TVONAIR 7.0</p>
                <p className='text-slate-400 text-sm mb-2'>Committee</p>
                <p className='text-slate-500 text-sm mb-3'>Design, create, develop, and maintain TV On Air website.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>HTML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>Mar 2021 — Mar 2022</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:mt-0 hover:text-teal-400 lg:hover:text-slate-300'>IT & Web Department · UMN TV Gen 7</p>
                <p className='text-slate-400 text-sm mb-2'>Organization</p>
                <p className='text-slate-500 text-sm mb-3'>Design, create, develop, and maintain UMN TV website.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>HTML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>May 2021 — Dec 2021</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:my-0 hover:text-teal-400 lg:hover:text-slate-300'>Website Developer · UMN Festival 2021</p>
                <p className='text-slate-400 text-sm mb-2'>Committee</p>
                <p className='text-slate-500 text-sm mb-3'>Integrating and maintain UMN Festival website.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>HTML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className='sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <p className='text-slate-500 text-sm'>Mar 2021 — Aug 2021</p>
              <div className='sm:ml-4'>
                <p className='text-slate-300 mt-2 sm:my-0 hover:text-teal-400 lg:hover:text-slate-300'>Security Division · Orientasi Mahasiswa Baru (OMB) UMN 2021</p>
                <p className='text-slate-400 text-sm mb-2'>Committee</p>
                <p className='text-slate-500 text-sm'>• Supervise the flow of OMB.</p>
                <p className='text-slate-500 text-sm mb-3'>• Maintain discipline of the committee and participants to obey OMB regulations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:pt-20' id='project'>
          <nav className='sticky top-0 drop-shadow backdrop-blur-3xl px-5 z-10 lg:hidden'>
            <h4 className='text-center text-slate-300 font-bold mb-8 py-2 sm:mx-10'>PROJECT</h4>
          </nav>
          <div className='mb-20 px-5 sm:mx-10 lg:ml-0'>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' onClick={() => handleOpenModal(1)}>Hangul Syllable Predicition &nbsp; <span className='text-slate-500'>(Not Published)</span><RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Thesis Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>Mobile application for handwriting classification of Korean language syllables. The model used in the application is trained using a machine learning algorithm, namely Convolutional Neural Network.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Python</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Flask</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Expo</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-28 lg:w-28 lg:h-16 xl:w-44 xl:h-28 mt-4 border-2 border-slate-600 hover:border-slate-500 sm:order-first'>
                <Image loading='lazy' src={hangulClassification} alt='Hangul Syllables Classification App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' onClick={() => handleOpenModal(4)}>Central OCR &nbsp; <span className='text-slate-500'>(Not Published)</span><RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Internship Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>A mobile application that uses the ocr feature to perform text extraction from various types of documents.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>React Native</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-28 lg:w-28 lg:h-16 xl:w-44 xl:h-28 mt-4 border-2 border-slate-600 hover:border-slate-500 sm:order-first'>
                <Image loading='lazy' src={ocr} alt='Hangul Syllables Classification App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' href='https://sei-you.vercel.app/welcome' target='_blank'>SeiYou<RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Group Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>Application for people that like voice acting. People can upload their voice acting and search other people&apos;s voice acting.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Ionic React</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>TypeScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Firebase</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-28 lg:w-28 lg:h-16 xl:w-44 xl:h-28 mt-4 border-2 border-slate-600 hover:border-slate-500'>
                <Image loading='lazy' src={seiyou} alt='SeiYou App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' onClick={() => handleOpenModal(2)}>Gebet App &nbsp;<span className='text-slate-500'>(Not Published)</span><RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Course Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>Dating app-like application.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Ionic React</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>TypeScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-28 lg:w-28 lg:h-16 xl:w-44 xl:h-28 mt-4 border-2 border-slate-600 hover:border-slate-500'>
                <Image loading='lazy' src={gebetApp} alt='SeiYou App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' href='https://play.google.com/store/apps/details?id=quick_recipe.didi_x_djongers' target='_blank'>Quick Recipe<RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Group Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>Mobile application to find food recipe. People can also upload their recipe.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Java</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>XML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>Firebase</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-28 lg:w-28 lg:h-16 xl:w-44 xl:h-28 mt-4 border-2 border-slate-600 hover:border-slate-500'>
                <Image loading='lazy' src={quicRecipe} alt='Hangul Syllables Classification App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' onClick={() => handleOpenModal(3)}>SandwichYay &nbsp;<span className='text-slate-500'>(Not Published)</span><RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Group Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>Website to make food order. Including admin dashboard section, where admins can restock and manage transactions.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  {/* <li className='rounded-xl bg-cyan-950 px-2 py-1'>CodeIgniter4</li> */}
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>PHP</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>HTML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>MySQL</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-20 lg:w-28 lg:h-14 xl:w-44 xl:h-20 mt-4 border-2 border-slate-600 hover:border-slate-500'>
                <Image loading='lazy' src={sandYay1} alt='Hangul Syllables Classification App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className='transition-all mb-10 sm:grid sm:grid-cols-[30%_70%] lg:p-5 lg:border lg:border-transparent lg:hover:bg-indigo-950 lg:hover:rounded-md'>
              <div className='sm:order-last sm:ml-4'>
                <a className='text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300' href='https://djong-weather.vercel.app/' target='_blank'>Djongers Weather <RxArrowTopRight /></a>
                <p className='text-slate-400 text-sm mb-2'>Group Project</p>
                <p className='text-justify text-slate-500 text-sm mb-3'>Website to check weather of all cities around the world.</p>
                <ul className='text-teal-400 text-xs flex gap-1 font-bold text-[10px]' style={{ flexWrap: 'wrap' }}>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>ReactJS</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>JavaScript</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>HTML</li>
                  <li className='rounded-xl bg-cyan-950 px-2 py-1'>CSS</li>
                </ul>
              </div>
              <div className='bg-emerald-900 relative overflow-hidden rounded-lg w-80 sm:w-40 sm:h-20 lg:w-28 lg:h-14 xl:w-44 xl:h-20 mt-4 border-2 border-slate-600 hover:border-slate-500'>
                <Image loading='lazy' src={djongWeather} alt='Hangul Syllables Classification App' style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <Modal1 open={open1} onClose={() => setOpen1(false)}>
          <Carousel1>
            {slides1.map((s, key) => (
              <Image loading='lazy' src={s} key={key} alt='carousel' className='rounded' />
            ))}
          </Carousel1>
        </Modal1>

        <Modal2 open={open2} onClose={() => setOpen2(false)}>
          <Carousel2>
            {slides2.map((s, key) => (
              <Image loading='lazy' src={s} key={key} alt='carousel' className='rounded' />
            ))}
          </Carousel2>
        </Modal2>

        <Modal3 open={open3} onClose={() => setOpen3(false)}>
          <Carousel3>
            {slides3.map((s, key) => (
              <Image loading='lazy' src={s} key={key} alt='carousel' className='rounded' />
            ))}
          </Carousel3>
        </Modal3>

        <Modal4 open={open4} onClose={() => setOpen4(false)}>
          <Carousel4>
            {slides4.map((s, key) => (
              <Image src={s} key={key} alt='carousel' className='rounded' />
            ))}
          </Carousel4>
        </Modal4>
        <Pokedex open={openPokedex} onClose={() => setOpenPokedex(false)} pokemonData={pokemon} />
      </main>
    </div>
  )
}
