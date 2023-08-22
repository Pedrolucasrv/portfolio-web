
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    theme?: 'alternative', 
    containerClassName?: string
}

export const Tag = (props: Props) => {
    return(
        <>  
            <div className={`bg-secondary rounded-full min h-min w-fit ${props.containerClassName}`}>
                <button {...props} className={`hover:translate-x-1 transition-all hover:-translate-y-1 border-2 rounded-full px-6 py-2 text-sm border-secondary bg-accent text-secondary ${props.className}`}>{props.children}</button> 
            </div>
        </>
    )
}