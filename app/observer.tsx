import { useInView } from 'react-intersection-observer';

const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });