/** Cross-page destinations for mobile hamburger menu (switch language via sibling route). */

export const sitePagesEn = [
  { to: '/', label: 'Home' },
  { to: '/east', label: 'SODIC East' },
  { to: '/eastvale', label: 'Eastvale' },
  { to: '/privacy', label: 'Privacy' },
] as const;

export const sitePagesAr = [
  { to: '/ar', label: 'الرئيسية' },
  { to: '/ar/east', label: 'SODIC East' },
  { to: '/ar/eastvale', label: 'Eastvale · سوديك المستقبل' },
  { to: '/ar/privacy', label: 'سياسة الخصوصية' },
] as const;
