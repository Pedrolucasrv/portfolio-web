import { Description } from "./components/Description"
import HorizontalScroll from "./components/HorizontalScroll"
import { Introduction } from "./components/Introduction"

const Home = () => {
    return(
        <>
            <Introduction/>
            <Description/>
            <HorizontalScroll></HorizontalScroll>
            <div className="h-screen">

            </div>
        </>
    )
}

export default Home