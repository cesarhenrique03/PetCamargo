import {clsx} from "clsx";
import type {ButtonHTMLAttributes} from "react";

export function Button({className, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return( 
        <button
            type="button"
            className={clsx(
                "absolute top-1/2 -translate-y-1/2 z-10 h-12 w-8 shrink-0 items-center justify-center rounded-md bg-[#F36804] shadow-lg hidden",
                "hover:brightness-95 hover:cursor-pointer",
                "sm:h-16 sm:w-10",
                "lg:flex",
                className)}
                {...props}>
            {children}
        </button>
    )
}