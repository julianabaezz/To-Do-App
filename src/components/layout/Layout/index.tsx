import { FC } from "react"
import { Main } from "../Main"
import { Footer } from "../Footer"
import { Header } from "../Header"



const Layout: FC = ({children}) => {
    return(
        <>
        <Header></Header>
        <Main>
            {children}
        </Main>
        <Footer></Footer>
        </>
    
    )
}

export {Layout}