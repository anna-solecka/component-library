import { ReactNode } from "react";

interface DsTableRowProps {
  children: ReactNode;
}

const DsTableRow: React.FC<DsTableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default DsTableRow;
