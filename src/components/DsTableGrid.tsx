import { ReactNode } from "react";
import DsTable from "../components/DsTable";
import DsTableBody from "../components/DsTableBody";
//import DsTableBody from "../components/DsTableBody";
import DsTableCell from "../components/DsTableCell";
import DsTableHead from "../components/DsTableHead";
import DsTableRow from "../components/DsTableRow";
//import DsTableRow from "../components/DsTableRow";

interface DsTableGridProps {
  columns: {
    label: string;
    field: string;
    render?: (data: any) => ReactNode;
  }[];
  // { label: "Id", field: "id" },
  // { label: "Name", field: "name" },
  // { label: "Bio", field: "bio" }
  data: any[];
}

const DsTableGrid: React.FC<DsTableGridProps> = ({
  columns,
  data,
}: DsTableGridProps) => {
  return (
    <DsTable>
      <DsTableHead>
        {columns.map((column, index: number) => (
          <DsTableCell key={index} isHeader>
            {column.label}
          </DsTableCell>
        ))}
      </DsTableHead>
      <DsTableBody>
        {data.map((dataItem, index: number) => (
          <DsTableRow key={index}>
            {columns.map((column, colIndex) => (
              <DsTableCell key={colIndex}>
                {column.render
                  ? column.render(dataItem)
                  : dataItem[column.field]}
              </DsTableCell>
            ))}
          </DsTableRow>
        ))}
      </DsTableBody>
    </DsTable>
  );
};

export default DsTableGrid;
