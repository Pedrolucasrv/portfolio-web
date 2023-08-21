
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    theme?: 'alternative', 
    containerClassName?: string
}

export const Button = (props: Props) => {
    return(
        <>  
            <div className={`bg-secondary min h-min w-fit ${props.containerClassName}`}>
                <button style={{border: '2px solid'}} {...props} className={`hover:translate-x-1 transition-all hover:-translate-y-1 border-2 rounded-sm px-6 py-2 border-secondary bg-accent text-secondary ${props.className}`}>{props.children}</button> 
            </div>
        </>
    )
}