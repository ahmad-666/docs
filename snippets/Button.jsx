const Button = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white rounded-lg py-2 px-4">
      {children}
    </button>
  );
};

export default Button;

//?Usage:
//some-page.mdx:
//import Button from '/snippets/Button.jsx'
//<Button>Hello</Button>
