
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import ProductTable from "./ProductTable";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProductTable />
      </Col>
      
    </Row>
  );
};

export default Tables;
