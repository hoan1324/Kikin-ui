import { Home,Blog,WorkHow,Login } from "../Pages"
const publicRoute=[
  {path:"/",element:Home},
  {path:"/Blog",element:Blog},
  {path:"/WorkHow",element:WorkHow},
  {path:"/Login",element:Login}
]
const privateRouter=[]
export {publicRoute,privateRouter}