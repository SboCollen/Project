import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function navbar(){
     


    return(
         <div class="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-cyan-900">
            <div className='max-w-[1240] m-auto flex justify-between items-center p-4' >             
                <ul className='hidden sm:flex'>




                    
                    <li className='p-4'>
                        <Link href='/request_water'>Request Water</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/sign_up'>Sign Up</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/login'>Login</Link>
                    </li>

                    {/*Make the icon */}
                    <li className='p-4' >
                        <Link href='/notification'>Notification</Link>

                    </li>

                    {/*Make the profile an icon */}
                    <li className='p-4'>
                        <Link href='/profile'>Profile</Link>
                    </li>
                                
                </ul>

                {/* Mobile Buttons*/}
                <div className='block sm:hidden z-10'>
                 <AiOutlineMenu size={20} />   
                </div>
                {/* M Menu*/}

                <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
                  >
                    <ul>
                    <li className='p-4 text-4pl hover:text-gray-500'>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    <li className='p-4 text-4pl hover:text-gray-500'>
                        <Link href='/login'>Login</Link>
                    </li>
                    <li className='p-4 text-4pl hover:text-gray-500'>
                        <Link href='/sign_up'>Sign Up</Link>
                    </li>
                    <li className='p-4 text-4pl hover:text-gray-500'>
                        <Link href='/login'>Login</Link>
                    </li>

                                    
                    </ul>
                </div>



                            </div>
                            
                </div>      
                        
    );

}