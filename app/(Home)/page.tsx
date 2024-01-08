import { Footer } from "@/src/components/Footer"
import { Contact } from "./components/Contact"
import { Description } from "./components/Description"
import {HorizontalScroll} from "./components/HorizontalScroll"
import { Introduction } from "./components/Introduction"
import { Repositories } from "./components/Projects"

const Home = () => {
    return(
        <>
            <Introduction/>
            <Description/>
            <HorizontalScroll></HorizontalScroll>
            <Repositories/>
            <Contact/>
            <Footer/>

        </>
    )
}

export default Home