import Button from "./Button";

type P = {
  text: string;
  className?: string;
};

function PrimaryButton({ text, className }: P) {
  return <Button className={`btn btn-primary ${className}`} text={text} />;
}

export default PrimaryButton;
