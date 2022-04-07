const getConfig = (type) => ({
  sm: `@media (${type}-width: 35.5em)`,
  md: `@media (${type}-width: 48em)`,
  lg: `@media (${type}-width: 64em)`,
  xl: `@media (${type}-width: 80em)`,
  xxl: `@media (${type}-width: 120em)`,
});

const min = getConfig("min");
const max = getConfig("max");

export { min, max };
