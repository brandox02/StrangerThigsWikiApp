type Props = {
  children: JSX.Element;
  render: boolean;
};

export default ({ children, render }: Props) => {
  return <>{render && children}</>;
};
