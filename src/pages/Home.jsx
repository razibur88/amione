import Blog from "../components/blog/Blog"
import Clienst from "../components/clientss/Clienst"
import Contact from "../components/contact form/Contact"
import Feature from "../components/feature/Feature"
import Question from "../components/frequently asked questions/Question"
import Workk from "../components/how we work/Workk"
import Bannerreuseable from "../components/reuseable/Bannerreuseable"
import Project from "../components/view our project/Project"



const Home = () => {
  return (
   <>
   <Bannerreuseable title="Building stellar websites for early startups" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
   <Workk/>
   <Project/>
   <Feature/>
   <Clienst/>
   <Question/>
   <Contact/>
   <Blog/>
   </>
  )
}

export default Home