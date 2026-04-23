export const Button = ({
  variant = "fill",
  size = "md",
  color = "primary",
  href,
  target,
  children,
  className = "",
  style = {},
}) => {
  const isLink = !!href;
  const variantClassname = {
    fill: "border-none mint-bg-[var(--color)] !mint-text-white hover:mint-bg-[var(--color-dark)]",
    outline:
      "border !mint-border-b border-solid mint-border-[var(--color)] !mint-text-[var(--color)] mint-bg-[var(--color-lightest)] hover:mint-bg-[var(--color-lighter)]",
    text: "border-none bg-transparent !mint-text-[var(--color)] hover:mint-bg-[var(--color-lighter)]",
  };
  const sizeClassname = {
    sm: "px-3 py-1 rounded-md text-sm",
    md: "px-6 py-2 rounded-lg text-base",
    lg: "px-8 py-2.5 rounded-xl text-lg",
  };
  const colors = {
    primary: "rgb(22 163 74)",
    info: "rgb(43 127 255)",
    warning: "rgb(254 154 0)",
    error: "rgb(251 44 54)",
  };
  const Comp = isLink ? "a" : "button";

  return (
    <Comp
      href={isLink ? href : undefined}
      target={isLink ? target : undefined}
      className={`inline-block duration-150 transition-all font-medium ${variantClassname[variant]} ${sizeClassname[size]} ${className}`}
      style={{
        "--color": colors[color],
        "--color-lightest": `color-mix(in srgb, ${colors[color]}, white 90%)`,
        "--color-lighter": `color-mix(in srgb, ${colors[color]}, white 80%)`,
        "--color-light": `color-mix(in srgb, ${colors[color]}, white 10%)`,
        "--color-dark": `color-mix(in srgb, ${colors[color]}, black 10%)`,
        ...style,
      }}
    >
      {children}
    </Comp>
  );
};

//?Usage:
//some-page.jsx (we must use 'export' not 'export default' for .jsx components + we must use arrow functions):
//import {Button} from '/snippets/Button.jsx'
//<Button>Hello</Button>
//* we should not import .jsx,.mdx snippets inside another snippet and instead we should import all needed snippets on page level
