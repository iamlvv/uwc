import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='w-full h-44 flex  items-center bg-gray-200 opacity-80'>
            <div className='flex-[20%] text-right pr-5'>
                <img
                src="https://www.globalcitizenyear.org/wp-content/uploads/2022/04/UWC-Secondary-RGB_screen.png"
                alt="Restaurant Logo"
                className="h-16 w-auto m-3 mr-0 ml-auto bg-gray-200"
                />
            </div>
            <div className='flex-[30%] text-center mx-10 text-sm'>
                <div className='flex mb-5 font-bold'>
                    <div className='flex-[20%]'>Home</div>
                    <div className='flex-[20%]'>About us</div>
                    <div className='flex-[20%]'>Contact</div>
                    <div className='flex-[20%]'>Terms</div>
                    <div className='flex-[20%]'>Privacy</div>
                </div>
                <div className='text-xs opacity-50'>
                    @2022 Your brand. All Right Reserved.
                </div>
            </div>
            <div className='flex-[20%]'>
                <div className='float-left mx-5'><FacebookIcon/></div>
                <div className='float-left mx-5'><TwitterIcon/></div>
                <div className='float-left mx-5'><InstagramIcon/></div>
            </div>
        </div>
    );
}

export default Footer;