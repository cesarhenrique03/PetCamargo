import {clsx} from "clsx";
import { button } from "framer-motion/client";

export function Button({className, children, ...props}) {
    return( 
        <button
            type="button"
            className={clsx(
                "z-10 flex h-12 w-8 shrink-0 items-center justify-center rounded-md bg-[#F36804] shadow-lg",
                "hover:brightness-95",
                "sm:h-16 sm:w-10", 
                className)}
                {...props}>
            {children}
        </button>
    )
}