import { Footer } from "@/src/components/Footer"
import { Contact } from "./components/Contact"
import { Description } from "./components/Description"
import { Experiences } from "./components/Experiences"
import { Introduction } from "./components/Introduction"
import { Repositories } from "./components/Projects"

const Home = () => {
    return(
        <>
            <Introduction/>
            <Description/>
            <Experiences/>
            <Repositories/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home