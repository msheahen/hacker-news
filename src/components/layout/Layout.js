import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";


export function Layout({children}){

   return(
       <div className={'App'}>
            <Header/>
               {children}
            <Footer/>
       </div>
   )
}
