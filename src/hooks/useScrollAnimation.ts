import { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Hook to detect when an element enters the viewport and trigger animations
 * @param options IntersectionObserver options and animation settings
 * @returns An object containing the ref to attach to the element and whether it's in view
 */
function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
}: ScrollAnimationOptions = {}): {
    ref: RefObject<T>;
    inView: boolean;
} {
    const [inView, setInView] = useState(false);
    const ref = useRef<T>(null);
    const enteredViewport = useRef(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // If triggerOnce is true and element has already entered viewport once, don't change state
                if (triggerOnce && enteredViewport.current) return;

                const isVisible = entry.isIntersecting;
                setInView(isVisible);

                if (isVisible && triggerOnce) {
                    enteredViewport.current = true;
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, inView };
}

export default useScrollAnimation;