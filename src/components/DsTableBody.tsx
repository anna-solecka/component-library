import React, { ReactNode } from "react";

interface DsTableBodyProps {
  children: ReactNode;
}

const DsTableBody: React.FC<DsTableBodyProps> = ({ children }) => {
  return <>{children}</>;
};

export default DsTableBody;
