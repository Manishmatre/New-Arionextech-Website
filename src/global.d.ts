/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

// For CSS
interface CSSModuleClasses {
  [key: string]: string;
}

// For SCSS
interface CSSModule {
  [key: string]: string;
}

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.scss' {
  const classes: CSSModule;
  export default classes;
}

// For environment variables
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
