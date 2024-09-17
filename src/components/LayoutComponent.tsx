import { FC, ReactNode } from "react";

interface LayoutComponentProps {
  header?: ReactNode;
  children: ReactNode;
  partner?: ReactNode;
  sidebar?: ReactNode;
  feedback?: ReactNode;
}
const LayoutComponent: FC<LayoutComponentProps> = ({
  header,
  children,
  partner,
  sidebar,
  feedback,
}) => {
  return (
    <div className="ds_wrapper">
      <main className="ds_layout  ds_layout--article">
        <div className="ds_layout__header">{header}</div>

        <div className="ds_layout__partner">{partner}</div>

        <div className="ds_layout__content">{children}</div>

        <div className="ds_layout__sidebar">{sidebar}</div>

        <div className="ds_layout__feedback">{feedback}</div>
      </main>
    </div>
  );
};

export default LayoutComponent;
