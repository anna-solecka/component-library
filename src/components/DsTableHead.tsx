import DsTableCell from "./DsTableCell";

interface DsTableHeadProps {
  children: React.ReactNode;
}

const DsTableHead: React.FC<DsTableHeadProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default DsTableHead;
