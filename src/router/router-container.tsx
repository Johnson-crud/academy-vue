import HomePage from "../pages/homePage/index.vue"
import LoginPage from "../pages/loginPage/index.vue"
import FormPage from "../pages/formPage/index.vue"
import { FORM_PATH, HOME_PATH, LOGIN_PATH} from "../utility/routerPath"

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

    },
    {
        name:"Form",
        component:FormPage,
        path:FORM_PATH
    }
]
export default routes