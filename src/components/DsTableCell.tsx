import { ReactNode } from "react";

interface DsTableCellProps {
  children: ReactNode;
  isHeader?: boolean;
  scope?: "row" | "col" | "rowgroup" | "colgroup";
}

const DsTableCell: React.FC<DsTableCellProps> = ({
  isHeader,
  children,
  scope,
}) => {
  return isHeader ? <th scope={scope}>{children}</th> : <td>{children}</td>;
};

export default DsTableCell;
