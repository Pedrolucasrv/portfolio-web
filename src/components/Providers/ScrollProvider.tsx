import { ScrollProvider, useScrollNow } from "@/src/context/ScrollContext";

export const Scroll = (children: any) => {


    return (
        <ScrollProvider>
            {children}
        </ScrollProvider>
    );
};