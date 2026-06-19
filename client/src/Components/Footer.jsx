import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-10 px-6 py-12"> 
        <div className='col-span-2 md:col-span-1'>
            <img src="../img/Kidrovelogo.png" alt="" className='w-32 mb-4'/>
            <h1 className='text-sm mb-5'>Discover and book the best activities for your kids in the UAE.</h1>
            <div className='flex gap-3 text-white'>
                <div className='bg-[rgb(20,184,166)] p-2 rounded-[100%]'>
                <FaFacebookF />
                </div>
                <div className='bg-[rgb(20,184,166)] p-2 rounded-[100%]'>
                <FaTwitter />
                </div>
                <div className='bg-[rgb(20,184,166)] p-2 rounded-[100%]'>
                <FaInstagram /> 
                </div>
                <div className='bg-[rgb(20,184,166)] p-2 rounded-[100%]'>
                <FaYoutube />
                </div>
                <div className='bg-[rgb(20,184,166)] p-2 rounded-[100%]'>
                <FaLinkedinIn />
                </div>
                    
            </div>
        </div>
        <div className='flex flex-col gap-3 text-sm'>
            <h1 className='font-bold text-[16px]'>Quick Links</h1>
            <a href="">About Us</a>
            <a href="">Blog</a>
            <a href="">Contact Us</a>
            <a href="">FAQs</a>
            <a href="" className='mb-6'>Partner with Us</a>

            <h1 className='font-bold'>Programs</h1>
            <a href="">Student Programs</a>
            <a href=""className='mb-6' >Partnerships</a>

            <h1 className='font-bold'>Teach</h1>
            <a href="">Teach as Organisation</a>
            <a href="" >Teach as Individual</a>
           
        </div>
        <div className='flex flex-col gap-4 text-sm'>
            <h1 className='font-bold'>Categories</h1>
            <a href="">Afterschool Activities</a>
            <a href="">Arts and Crafts</a>
            <a href="">Baby & Toddler</a>
            <a href="">Birthday Deals</a>
        </div>
        <div className='col-span-2 md:col-span-1 text-sm'>
            <h1 className='font-bold mb-4 '>NewsLetter</h1>
            <p className='mb-4'>Subscribe to our newsletter for updates on new activites and promotions</p>
            <div className='flex flex-col gap-2'>
            <input type="text" placeholder='Enter your Email' className='border border-gray-400 p-2 rounded-lg'/>
            <input type="text" placeholder='Your Name' className='border border-gray-400 p-2 rounded-lg'/>
            <input type="text" placeholder='City (optional)' className='border border-gray-400 p-2 rounded-lg'/>
            <input type="text" placeholder='Age of children (optional)' className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <button className='bg-pink-200 p-2 rounded-lg text-white font-bold mt-2 w-full'>Subscribe</button>
            <h3 className='text-[12px] mt-2'>By subscribing, you agree to recieve marketing emails from us. You can unsubscribe at any time</h3>
        </div>
    </div>
  )
}

export default Footer