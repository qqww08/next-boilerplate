import { ReactNode, useState } from "react";

type UseModalStateReturnValue = {
  visible: boolean;
  open: () => void;
  close: () => void;
  if: (ReactNode) => ReactNode;
};

export default (): UseModalStateReturnValue => {
  const [visible, setVisible] = useState(false);

  return {
    visible,
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
    if: node => visible && node
  };
};
