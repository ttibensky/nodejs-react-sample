import Button from "./Button";

type P = {
  text: string;
  className?: string;
};

function SecondaryButton({ text, className }: P) {
  return (
    <Button className={`btn btn-sm btn-secondary ${className}`} text={text} />
  );
}

export default SecondaryButton;
