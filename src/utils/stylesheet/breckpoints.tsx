/**
 * Export a object with Media Queries.
 * This already set queries which you can use.
 *
 * 
 * 
  s:  `(max-width: 400px)`,
  sm: `(min-width: 401px) and (max-width: 734px)`,
  md: `(min-width: 735px) and (max-width: 1068px)`,
  lg: `(min-width: 1069px) and (max-width: 1180px)`,
  xl: `(min-width: 1181px) and (max-width: 1441px)`,
  xxl: `(min-width: 1442px)`,


 * @example
 *  style.ts
 * @media ${media.sm} {
 *   background: red;
 * }
 */

export const sizes = {
  xs: 419,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920
};

export const media = {
  s: `(max-width:${sizes.xs}px)`,
  sm: `(min-width: ${sizes.xs + 1}px) and (max-width:${sizes.sm}px)`,
  md: `(min-width: ${sizes.sm + 1}px) and (max-width:${sizes.md}px)`,
  lg: `(min-width: ${sizes.md + 1}px) and (max-width:${sizes.lg}px)`,
  xl: `(min-width: ${sizes.lg + 1}px) and (max-width:${sizes.xl}px)`,
  xxl: `(min-width: ${sizes.xl + 1}px)`,

  maxSM: `(max-width:${sizes.sm}px)`
};
