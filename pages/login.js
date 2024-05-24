import Head from "next/head"
import Layout from "../components/Layout"
import Link from "next/link"
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import {useState} from 'react';
import { signIn } from "next-auth/react"

const login = () => {

    const[show,setShow]=useState(false)


    async function handleGoogleSignIn (event){
        event.preventDefault(); 
        await signIn('google',{callbackUrl:"http://https://skillsphere-ayush-jyoti-edtech.vercel.app/"})
    }

    async function handleGithubSignIn (event){
        event.preventDefault(); 
        await signIn('github',{callbackUrl:"http://localhost:3000/"})
        
    }
     

    return (
        <Layout>
            <Head>
                <title>Login Page </title>
            </Head>
            <section className="w-3/4 flex  mx-auto flex-col gap-8 ">
                <div className="title">
                    <h1 className="text-gray-800 text-2xl home_button pb-2">WELCOME TO <Link href={"/"}><span className="text-3xl uppercase home_button tracking-tighter text-[#843fe7]">skillsphere</span></Link></h1>
                    <p className="w-5/6 mx-auto home_text2 text-base text-gray-600">Join skillsphere for Free and explore the new learing experience</p>
                </div>
                <form className="flex flex-col  items-center gap-5">
                    <div className="input-group relative flex items-center home_text2 text-base">
                        <input className="w-[345px] px-4 py-2 rounded border-2 border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 pr-10 outline-none" type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <span className="absolute right-0 pr-3 text-rose-500 hover:text-rose-600">
                            <HiAtSymbol size={22} />
                        </span>
                    </div>
                    <div className="input-group relative flex items-center text-base home_text2 ">
                        <input className="w-[345px] px-4 py-2 rounded border-2 border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 pr-10 outline-none" type={`${show?"text":"password"}`}
                            name="password"
                            placeholder="password"
                        />
                        <span className="absolute right-0 pr-3 text-rose-500 hover:text-rose-600 hover:cursor-pointer" onClick={()=>setShow(!show)}>
                            <HiFingerPrint size={22} />
                        </span>
                    </div>
                    <div className="input-button home_text2 w-full bg-rose-500 hover:bg-rose-400 text-white  py-2 px-4 rounded">
                        <button type="submit">
                            Login
                        </button>
                    </div>
                    <div className="input-button home_text2 w-full text-gray-800 border-2 border-rose-400 hover:bg-rose-400 hover:text-white py-2  rounded">
                        <button onClick={handleGoogleSignIn} type="submit" className="flex items-center justify-center w-full ">
                            <span >Sign in with Google</span>
                            <span className="ml-1"><FcGoogle size={22}/>
                            </span>
                        </button>
                    </div>
                    <div className="input-button home_text2 w-full text-gray-800 border-2 border-rose-400 hover:bg-rose-400 hover:text-white py-2  rounded">
                        <button onClick={handleGithubSignIn} type="submit" className="flex items-center justify-center w-full ">
                            <span >Sign in with Github</span>
                            <span className="ml-1"><AiOutlineGithub size={22}/>
                            </span>
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 home_text2">Don't have an account yet?<Link href={'/register'} className="text-blue-700 hover:underline">Sign up</Link> </p>
            </section>
        </Layout>
    )
}

export default login
