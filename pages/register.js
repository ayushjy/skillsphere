import Head from "next/head"
import Layout from "../components/Layout"
import Link from "next/link"
import { FaRegUser } from "react-icons/fa";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import {useState} from 'react';
import {useFormik} from 'formik';

const register = () => {

    const[show,setShow]=useState(false)
    const[showcp,setShowcp]=useState(false)
    const formik = useFormik({
         initialValues:{
            username:"",
            password:"",
            email:"",
            cpassword:""
         },
          onSubmit
    })

    
     async function onSubmit (values){
        console.log(values);
    }

    return (
        <Layout>
            <Head>
                <title>Login Page </title>
            </Head>
            <section className="w-3/4 max-sm:w-10/12 flex  mx-auto flex-col gap-8 ">
                <div className="title">
                    <h1 className="text-gray-800 max-sm:w-full text-4xl max-sm:text-3xl home_button pb-2">WELCOME TO <Link href={"/"}><span className="text-4xl max-sm:text-3xl uppercase home_button tracking-tighter text-[#843fe7]">skillsphere</span></Link></h1>
                    <p className="w-4/5 max-xl:w-full max-sm:w-full mx-auto home_text2 text-base max-sm:text-sm text-gray-600">Join Skillsphere for Free and explore the new learing experience</p>
                </div>
                <form className="flex flex-col  items-center gap-5" onSubmit={formik.handleSubmit}>
                <div className="w-full input-group relative flex items-center home_text2 text-base max-sm:text-sm">
                        <input className="w-full px-4 py-2 rounded border-2 border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none pr-8" type="text"
                            name="username"
                            {...formik.getFieldProps('username')}
                            placeholder="username"
                        />
                        <span className="absolute right-0 pr-3 text-rose-500 hover:text-rose-600 hover:cursor-pointer">
                            <FaRegUser size={22} />
                        </span>
                    </div>
                    <div className="w-full input-group relative flex items-center home_text2 text-base max-sm:text-sm">
                        <input className="w-full px-4 py-2 rounded border-2 border-rose-400 focus:border-rose-500  focus:ring-1 focus:ring-rose-500 outline-none pr-8" type="email"
                            name="email"
                            placeholder="Email"
                            {...formik.getFieldProps('email')}

                        />
                        <span className="absolute right-0 pr-3 text-rose-500 hover:text-rose-600 hover:cursor-pointer">
                            <HiAtSymbol size={22} />
                        </span>
                    </div>
                    <div className="w-full input-group relative flex items-center text-base max-sm:text-sm home_text2 ">
                        <input className="w-full px-4 py-2 rounded border-2 border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none pr-10" type={`${showcp?"text":"password"}`}
                            name="password"
                            placeholder="password"
                            {...formik.getFieldProps('password')}

                        />
                        <span className="absolute right-0 pr-3 text-rose-500 hover:text-rose-600 hover:cursor-pointer" onClick={()=>setShowcp(!showcp)}>
                            <HiFingerPrint size={22} />
                        </span>
                    </div>
                    <div className="w-full input-group relative flex items-center text-base max-sm:text-sm home_text2 ">
                        <input className="w-full px-4 py-2 rounded border-2 border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none pr-10" type={`${show?"text":"password"}`}
                            name="password"
                            placeholder="Confirm password"
                            {...formik.getFieldProps('cpassword')}

                        />
                        <span className="absolute right-0 pr-3 text-rose-500 hover:text-rose-600 hover:cursor-pointer" onClick={()=>setShow(!show)}>
                            <HiFingerPrint size={22} />
                        </span>
                    </div>
                    <div className=" input-button home_text2 w-full bg-rose-500 hover:bg-rose-400 text-white max-sm:text-sm py-2 px-4 rounded">
                        <button type="submit">
                                Sign up
                        </button>
                    </div>
                    
                </form>
                <p className="text-center text-gray-600 home_text2 max-sm:text-sm">Have an account?<Link href={'/login'} className="text-blue-700 hover:underline">Sign in</Link> </p>
            </section>
        </Layout>
    )
}

export default register
