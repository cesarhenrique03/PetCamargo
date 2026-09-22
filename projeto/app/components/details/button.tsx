import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

export function Button({className, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return( 
        <button
            type="button"
            className={clsx(
                "absolute top-1/2 -translate-y-1/2 z-10 flex h-12 w-8 shrink-0 items-center justify-center rounded-md bg-[#F36804] shadow-lg",
                "hover:brightness-95",
                "sm:h-16 sm:w-10", 
                className)}
                {...props}>
            {children}
        </button>
    )
}