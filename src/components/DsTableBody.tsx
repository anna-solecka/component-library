import React, { ReactNode } from "react";

interface DsTableBodyProps {
  children: ReactNode;
}

const DsTableBody: React.FC<DsTableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default DsTableBody;
