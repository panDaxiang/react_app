declare module '*.css';
declare module '*.png';
declare module '*.html';
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export = classes;
}