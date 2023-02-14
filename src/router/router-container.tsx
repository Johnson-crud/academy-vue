import HomePage from "../pages/homePage/index.vue"
import LoginPage from "../pages/loginPage/index.vue"
import { HOME_PATH, LOGIN_PATH} from "../utility/routerPath"

const routes=[
    {
        name:"Home",
        component:HomePage,
        path:HOME_PATH

    },
    {
        name:"Login",
        component:LoginPage,
        path:LOGIN_PATH

    }
]
export default routes