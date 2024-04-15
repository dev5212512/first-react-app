interface Props {
  text: String;
}

const Alert = ({ text }: Props) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
