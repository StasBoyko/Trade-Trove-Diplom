import { RegistrationPage, LoginPage, ProfilePage, MainPage, ProductPage, ShoppingCartPage, FAQPage, OrderPage } from "../Pages/index";

export const authRoutes=[
    {path:'/',Component:MainPage},
    {path:'/FAQ',Component:FAQPage},
    {path:'/BasketPage',Component:ShoppingCartPage},
    {path:'/login',Component:LoginPage},
    {path:'/ProductPage/:id&:userId',Component:ProductPage},
    {path:'/profile',Component:ProfilePage},
    {path:'/registration',Component:RegistrationPage},
    {path:'/order',Component:OrderPage},
]


export const publicRoutes=[
    {path:'/',Component:MainPage},
    {path:'/FAQ',Component:FAQPage},
    {path:'/registration',Component:RegistrationPage},
    {path:'/login',Component:LoginPage},
]