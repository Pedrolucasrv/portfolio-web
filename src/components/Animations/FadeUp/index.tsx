import { motion } from "framer-motion"

const FadeUp = (props : {children: React.ReactNode}) => {
    return(
        <motion.div viewport={{ once: true, amount: 0.5 }} initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}} className="bg-secondary rounded-lg h-full">
            {props.children}
        </motion.div>
    )
}

export default FadeUp