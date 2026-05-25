export function revealClass(inView, animation, delay = '') {
  return inView ? `${animation} ${delay}`.trim() : 'opacity-0';
}
