import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center',

    variants: { 
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secundary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 '
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11 '
        }
    },

    defaultVariants: {
        variant: 'primary'
    },


})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode

}

export function Button({ children, variant, size, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant, size })}>
            {children}
        </button>
    )
}