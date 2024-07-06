import LayoutNotQues from "../Components/Layout/LayoutNotQues"
import { Home,Blog,WorkHow,Login,Privacy,Term } from "../Pages"
const publicRoute=[
  {path:"/",element:Home},
  {path:"/Blog",element:Blog},
  {path:"/WorkHow",element:WorkHow},
  {path:"/Login",element:Login},
  {path:"/Privacy",element:Privacy,layout:LayoutNotQues},
  {path:"/Term",element:Term,layout:LayoutNotQues}

]
const privateRouter=[]
export {publicRoute,privateRouter}