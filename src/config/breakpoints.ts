enum Breakpoints {
  Mobile = '360px',
  Tablet = '768px',
  Laptop = '992px',
  Desktop = '1280px',
  WideDesktop = '1440px',
}

export const media = {
  mobile: `@media (max-width: ${Breakpoints.Mobile})`,
  tablet: `@media (max-width: ${Breakpoints.Tablet})`,
  laptop: `@media (max-width: ${Breakpoints.Laptop})`,
  desktop: `@media (max-width: ${Breakpoints.Desktop})`,
  wideDesktop: `@media (max-width: ${Breakpoints.WideDesktop})`,
}
