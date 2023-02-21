import style from "./text.module.css";
import React from "react";

interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
  variant?:
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "headlineLarge"
    | "headlineMedium"
    | "headlineSmall"
    | "titleLarge"
    | "titleMedium"
    | "titleSmall"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall"
    | "labelLarge"
    | "labelMedium"
    | "labelSmall";
  as?: "span" | "p";
}

const Text = ({
  children,
  as = "p",
  variant = "bodyMedium",
  className,
  ...props
}: TextProps) => {
  const TypographyComponent = `${as}` as keyof Pick<
    JSX.IntrinsicElements,
    "p" | "span"
  >;
  return (
    <TypographyComponent
      className={`${style.typography} ${style[variant]} ${className}`}
      {...props}
    >
      {children}
    </TypographyComponent>
  );
};
export { Text };
