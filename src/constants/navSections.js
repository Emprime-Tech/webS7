export const NAV_ITEMS = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Gallery', section: 'gallery' },
  { label: 'Contact', section: 'contact' },
];

export function homeSectionPath(section) {
  return `/#${section}`;
}
