// Animationa
export const bottomVariants = {
    initial: {
        x: 0,
        y:120,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
}
export const LeftRight = {
    initial: {
        x: 120,
        y:0,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
}
