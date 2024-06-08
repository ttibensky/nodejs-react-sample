type P = {
  text: string;
  className?: string;
};

function Button({ text, className }: P) {
  return <button className={className}>{text}</button>;
}

export default Button;
