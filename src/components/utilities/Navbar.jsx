"use client"
import React, { useState, useEffect } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Link from 'next/link';
import Profile from '@/components/utilities/UserAvatar/Profile';
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import axios from 'axios';

function Navbar() {
    const [login, setLogin] = useState(false);
    useEffect(() => {
        setLogin(window.localStorage.getItem('userInfo'))
    }, []);


    return (
        <div className=' my-8 flex items-center justify-between'>
            <div>
                <h1 className=' text-3xl font-medium'>StudentStay</h1>
                <p className='text-sm font-sans' >Community plateform for student Off-Cmapus accomodation </p>
            </div>

            <ul className='flex gap-8 items-center'>
                <li><Link href={'/'}><HomeOutlinedIcon className='text-3xl font-thin' /></Link></li>
                <li>
                    <Link href={'/chat'}><MailOutlineIcon className=' text-2xl'/></Link>
                </li>
                <li>

                    <Popover>
                        <PopoverTrigger><NotificationsNoneIcon className=' text-2xl' /></PopoverTrigger>
                        <PopoverContent>
                            <div>Harshit Garg : hiii</div>
                            <div>Harshit Garg : hiii</div>
                        </PopoverContent>
                    </Popover>
                </li>
                <li >
                    {login ? (
                        <Profile />
                    ) :
                        (<Link href={'/auth/login'}>Sign In/Sign Up</Link>)}
                </li>
            </ul>
        </div>
    )
}
export default Navbar;



