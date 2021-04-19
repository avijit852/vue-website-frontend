import Home from '../components/home/Home'
import About from '../components/about/About'
import Service from '../components/service/Service'
import ServiceSinglePage from '../components/service/ServiceSinglePage'
import Portfolio from '../components/portfolio/Portfolio'
import PortfolioSingle from '../components/portfolio/PortfolioSingle'
import Blogs from '../components/blogs/Blogs'
import SingleBlogs from '../components/blogs/SingleBlogs'
import Feedback from '../components/feedback/Feedback'
import Reach from '../components/reach/Reach'

export default [
    // {
    //     path: '*', 
    //     component: Notfund,
    //     meta: {
    //      title:'Not fund Page',
    //    } 
    //  },
     { 
       path:'/', 
       component:Home, 
       meta: {
         title:'Creative Web Design - Home',
       }
     },
     { 
      path:'/about', 
      component:About, 
      meta: {
        title:'Creative Web Design - About Us',
      }
     },
     { 
      path:'/service', 
      component:Service, 
      meta: {
        title:'Creative Web Design - Service',
      }
     },

     {
      path:'/service/:id', 
      component:ServiceSinglePage, 
      meta: {
        title:'Creative Web Design - Service Single Page',
      }
     },

     { 
      path:'/portfolio', 
      component:Portfolio, 
      meta: {
        title:'Creative Web Design - Portfolio',
      }
     },

     { 
      path:'/portfolio/:id', 
      component:PortfolioSingle, 
      meta: {
        title:'Creative Web Design - Single Portfolio',
      }
     },

     { 
      path:'/blogs', 
      component:Blogs, 
      meta: {
        title:'Creative Web Design - Blogs',
      }
     },
     {
       path:'/blogs/:id',
       component:SingleBlogs, 
       meta: {
          title:'Creative Web Design - Single Blogs',
        }
     },
     { 
      path:'/feedback', 
      component:Feedback, 
      meta: {
        title:'Creative Web Design - Feedback',
      }
     },
     { 
      path:'/reach', 
      component:Reach, 
      meta: {
        title:'Creative Web Design - Reach Us',
      }
     },
]