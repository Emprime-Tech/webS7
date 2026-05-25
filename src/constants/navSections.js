export const NAV_ITEMS = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'gallery' },
  { label: 'Gallery', section: 'about' },
  { label: 'Contact', section: 'contact' },
];

export function homeSectionPath(section) {
  return `/#${section}`;
}
