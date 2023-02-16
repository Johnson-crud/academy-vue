import HomePage from "../pages/homePage/index.vue"
import signUpPage from "../pages/loginPage/signUp.vue"
import loginPage from "../pages/loginPage/login.vue"
import FormPage from "../pages/formPage/index.vue"
import ForgotPasswordPage from "../pages/loginPage/forgotPassword.vue"
import ResetPasswordPage from "../pages/loginPage/resetPassword.vue"
import { FORM_PATH, HOME_PATH, LOGIN_PATH ,SIGNUP_PATH,FORGOTPASSWORD_PATH,RESETPASSWORD_PATH} from "../utility/routerPath"

const routes=[
    {
        name:"Home", 
        component:HomePage,
        path:HOME_PATH

    },
    {
        name:"SignUp",
        component:signUpPage,
        path:SIGNUP_PATH

    },
    {
        name:"Login",
        component:loginPage,
        path:LOGIN_PATH

    },
    {
        name:"ForgotPassword",
        component:ForgotPasswordPage,
        path:FORGOTPASSWORD_PATH

    },
    {
        name:"ResetPassword",
        component:ResetPasswordPage,
        path:RESETPASSWORD_PATH

    },
    {
        name:"Form",
        component:FormPage,
        path:FORM_PATH
    }
]
export default routes