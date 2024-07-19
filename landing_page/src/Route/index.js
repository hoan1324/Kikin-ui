import LayoutNotQues from "../Components/Layout/LayoutNotQues"
import { Home,Blog,WorkHow,Login,Privacy,Term } from "../Pages"
import { listBlog } from "../ImageLink/imageLinkBlog"
import DetailBlog from "../Pages/Blog/Blog-detail"
const publicRoute=[
  {path:"/",element:Home},
  {path:"/Blog",element:Blog,layout:null},
  {path:"/WorkHow",element:WorkHow},
  {path:"/Login",element:Login,layout:null},
  {path:"/Privacy",element:Privacy,layout:LayoutNotQues},
  {path:"/Term",element:Term,layout:LayoutNotQues},

  ...listBlog.map((blog)=>(
    {
      path:`/Blog/${blog.h1.replace(/ /g, "-")}`,element:DetailBlog,layout:null
    }
  ))

]
const privateRouter=[]
export {publicRoute,privateRouter}