declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface Alert {
  title?: string;
  variant?: "filled" | "outlined" | "default";
  props: any;
  hideIcon: boolean;
}
