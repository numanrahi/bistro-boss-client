import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 , 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis! Rem ipsam ullam laboriosam dolorem alias, non error impedit maiores sequi inventore atque? Aperiam tempore aut, nobis voluptate adipisci voluptates dolorum provident! Officia recusandae ut blanditiis, reiciendis magnam, labore possimus aliquam sint ea eligendi voluptates pariatur, sit sequi porro ullam.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;