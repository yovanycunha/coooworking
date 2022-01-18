/// <reference types="next" />
/// <reference types="next/types/global" />

type TImagePath = string;

declare module '*.jpg' {
  const content: TImagePath;
  export = content;
}

declare module '*.jpeg' {
  const content: TImagePath;
  export = content;
}

declare module '*.png' {
  const content: TImagePath;
  export = content;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGS>>;
  export = content;
}