import { FC, ReactNode } from "react";

interface DesignSystemProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

const DesignSystem: FC<DesignSystemProps> = ({ header, footer, children }) => {
  return (
    <div className="ds_page">
      <div className="ds_page__top">{header}</div>

      <div className="ds_page__middle">{children}</div>

      <div className="ds_page__bottom">{footer}</div>
    </div>
  );
};

export default DesignSystem;
