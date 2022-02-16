import React from 'react'
import Contact from '../contact/Contact'
import Curriculum from '../curriculum/Curriculum'
import Fees from '../fees/Fees'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Home from '../home/Home'
import Logo from '../logo/Logo'
import Questions from '../questions/Questions'
import Services from '../services/Services'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Home />
            <Logo />
            <Curriculum />
            <Services />
            <Fees />
            <Questions />
            <Contact />
            <Footer />
        </div>
    )
}

export default Dashboard