// CSS module declarations
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Allow side-effect CSS imports
declare module "*.css" {}

// Additional style module declarations
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}
