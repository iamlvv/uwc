import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='w-screen h-screen'>
      <Header/>
      <Sidebar/>
      <p>
        App
      </p>
      <Footer/>
    </div>
  )
}
