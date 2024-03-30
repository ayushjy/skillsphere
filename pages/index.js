import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from 'next/head'
import Experts from "@/components/Experts"
import TrendingCourses from "@/components/TrendingCourses"
import SpecialFeatures from "@/components/SpecialFeatures"
import JoinNow from "@/components/JoinNow"
import LandingPage from "@/components/LandingPage"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
      <Header />
      <LandingPage/>   
      <Experts />
      <TrendingCourses />
      <SpecialFeatures />
      <JoinNow />
      <Footer />
    </div>
    </div>
  )
}
export default Home

