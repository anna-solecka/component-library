interface DsTableProps {
  children: React.ReactNode;
}

const DsTable: React.FC<DsTableProps> = ({ children }) => {
  return <table className="ds_table">{children}</table>;
};

export default DsTable;
