import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal component to add scroll-triggered entrance animations.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The elements to animate.
 * @param {string} [props.variant='up'] - Animation variant ('up', 'left', 'right', 'scale').
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {number} [props.delay=0] - Delay in milliseconds before animation starts.
 */
export default function Reveal({ children, variant = 'up', className = '', delay = 0, as: Component = 'div', ...props }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it intersects, we can stop observing it
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset the trigger point slightly above the viewport bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const getVariantClass = () => {
    switch (variant) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'scale':
        return 'reveal-scale';
      case 'up':
      default:
        return 'reveal';
    }
  };

  return (
    <Component
      ref={ref}
      className={`${getVariantClass()} ${isIntersecting ? 'active' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
