interface DsTableHeadProps {
  children: React.ReactNode;
}

const DsTableHead: React.FC<DsTableHeadProps> = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

export default DsTableHead;
