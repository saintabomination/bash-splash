import './Button.styles.scss';

type Props = {
  text: string;
  handler?: () => any;
};

const Button = ({ text, handler }: Props): JSX.Element =>
  (
    <button className="button" onClick={handler ?? undefined}>{text}</button>
  );

export default Button;
