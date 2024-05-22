import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from 'next/head'
import TrendingCourses from "@/components/TrendingCourses"
import SpecialFeatures from "@/components/SpecialFeatures"
import JoinNow from "@/components/JoinNow"
import LandingPage from "@/components/LandingPage"
import CommunityExperts from "@/components/CommunityExperts"
import { useSession } from "next-auth/react"
import { login,logout } from "@/lib/features/user/userSlice"
import { useAppDispatch } from "@/lib/hooks"
import Accordian from "@/components/Accordian"

const Home = ({data}) => {
  const dispatch= useAppDispatch();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      dispatch(login(
        {
          name: session.user.name,
          email: session.user.email,
          image:session.user.image
        }
      ))
    }
    else {
      dispatch(logout())
    }
  }, [session, dispatch])

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
      <Header />
      <LandingPage/>
      <CommunityExperts />
      <TrendingCourses />
      <div className="max-lg:hidden">
      <SpecialFeatures />
      </div>
      <div className="lg:hidden"> 
      <Accordian/>
      </div>
      <JoinNow />
      <Footer />
    </div>
    </div>
  )
}
export default Home

