// import ContactFormFormik from "../components/ContactFormFormik";
// import DsNotificationPanel from "../components/DsNotificationPanel";

import DsPageHeader from "../components/DsPageHeader";
// import DsTable from "../components/DsTable";
// import DsTableBody from "../components/DsTableBody";
// import DsTableCell from "../components/DsTableCell";
// import DsTableHead from "../components/DsTableHead";
// import DsTableRow from "../components/DsTableRow";

import LayoutComponent from "../components/LayoutComponent";
import MortgageCalculator from "../components/MortgageCalculator";

const AboutPage = () => {
  return (
    <>
      <LayoutComponent
        header={
          <>
            <DsPageHeader
              title="Mortgage calculator"
              label="Form in formik"
              metadataKey="Last updated"
              metadataValue="06.11.2024"
            />
          </>
        }
      >
        <MortgageCalculator />
        {/* <DialogElement title="Mortgage calculations:" buttonLabel="close">
          <p>Calculations</p>
        </DialogElement> */}
      </LayoutComponent>
    </>
  );
};

export default AboutPage;
//
{
  /* <DsNotificationPanel title="Thank you for visiting">
        "This is a contact form page"
      </DsNotificationPanel>
      <ContactFormFormik />
      <DsTable>
        <DsTableHead>
          <DsTableCell isHeader>One</DsTableCell>
          <DsTableCell isHeader>Two</DsTableCell>
          <DsTableCell isHeader>Three</DsTableCell>
          <DsTableCell isHeader>Four</DsTableCell>
        </DsTableHead>
        <DsTableBody>
          <DsTableRow>
            <DsTableCell>Cell 1</DsTableCell>
            <DsTableCell>Cell 2</DsTableCell>
            <DsTableCell>Cell 3</DsTableCell>
            <DsTableCell>Cell 4</DsTableCell>
          </DsTableRow>
          <DsTableRow>
            <DsTableCell>Row 2</DsTableCell>
            <DsTableCell>Row 2</DsTableCell>
            <DsTableCell>Row 2</DsTableCell>
            <DsTableCell>Row 2</DsTableCell>
          </DsTableRow>
          <DsTableRow>
            <DsTableCell>Row 3</DsTableCell>
            <DsTableCell>Row 3</DsTableCell>
            <DsTableCell>Row 3</DsTableCell>
            <DsTableCell>Row 3</DsTableCell>
          </DsTableRow>
        </DsTableBody>
      </DsTable> */
}

{
  /* <Table7Container component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer> */
}
