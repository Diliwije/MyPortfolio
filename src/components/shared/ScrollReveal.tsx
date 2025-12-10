import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
    children: React.ReactNode;
    // animation direction
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    className = ""
}) => {
    // Section එක screen එකේ පේනවද කියලා check කරන්න
    const { ref, inView } = useInView({
        triggerOnce: true, // එක් වරක් පමණක් trigger කරන්න.
        threshold: 0.1, // 10%ක් පෙනුනත් ඇති.
    });

    const getAnimationVariants = () => {
        let initial: any = { opacity: 0 };
        let animate: any = { opacity: 1 };

        switch (direction) {
            case 'left':
                initial.x = -100;
                animate.x = 0;
                break;
            case 'right':
                initial.x = 100;
                animate.x = 0;
                break;
            case 'down':
                initial.y = -100;
                animate.y = 0;
                break;
            case 'up':
            default:
                initial.y = 100;
                animate.y = 0;
                break;
        }

        return {
            initial: initial,
            animate: animate,
        };
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={getAnimationVariants()}
            initial="initial"
            animate={inView ? "animate" : "initial"} // පේනකොට animate කරන්න
            transition={{ duration: 0.7, delay: delay }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
