import { Input } from "postcss";
import Link from "next/link";
 

export default function login(){
    return(
        <section className=' md:bg-sky-500  h-15 flex items-center justify-center rounded-3xl'>
            <div className='md:bg-blue-900 sm rounded-2xl shadow-lg p-6 items-center'>
                <div className=' m-6 px-13'>

                    {/*Center Login */}
                <h className='font-bold text-2xl flex font-center text-[#eeee]'>Login</h>
                <form action='' class='flex flex-col gap-4 '>
                    <input class='p-2 rounded-xl border mt-8' type='text'
                     name='email'
                     placeholder='Email'>
                    </input >

                    <div>
                    {/*Add the password icon */}

                    <input class='p-2 rounded-xl border w-full' type='password'
                    placeholder='Password'>
                         
                    </input>
                    </div>
                    

                    <button class='bg-[#fff] hover:scale-105 rounded-xl py-2 font-bold'>Login</button>

                </form>
                <div className='mt-8 grid-cols-3 items center'>
                    {/*Find a way to put OR */}
                     <hr >
                    
                     </hr>
                </div>
                    {/*Add Google Icon */}
                <button class='bg-white hover:scale-105 border py-2 w-full rounded-xl mt-5'>Login with Google</button>
                </div>

                    {/*Should be a link to get a user password */}
                <p class='mt-5 text-xs '>Forgot your password?</p>

                <div className='flex'>
                    <p class='mt-3 text-xs'>Don't have an account?</p>
                    {/*Make a register button little bit smaller and the font */}
                    {/*<button class='py-2 px-5 bg-white rounded-xl  '>Register</button>*/}
                    <Link class='py-2 px-5 bg-white rounded-xl' href='/sign_up'>Sign Up</Link>
                </div>
            </div>

            
            <div className='w-1/2 md:block hidden '>
             <img class=' rounded-2xl m-10 h-15 w-full object-contain 'src='water.jpg' alt='water'></img>
            </div>
        </section>


        
    )
}
