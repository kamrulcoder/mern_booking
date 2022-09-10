
import   React, { useState }  from "react";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import productImage from "../../assets/images/product1.jpg";
import Switch from 'react-js-switch';

import styles from "./product.module.css";

const tableData = [
    {
      name: "kamrul hasan  ",
      email:"kamrulcoder@gmail.com",
      phone:"01929394261",
      role:"admin",
      status: "active",
    },
   
];

const UserTable = () => 
{

const [isSwitchOn, setIsSwitchOn] = useState(true);

    const switch_onChange_handle = () => {
        setIsSwitchOn(!isSwitchOn);
        //...
      };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="d-flex justify-content-between">
           <h6>Overview of the projects</h6> 
           <button  className="btn btn-primary"><i  className="bi bi-plus-circle"></i> Add Product</button>
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead className="text-center">
              <tr  >
                <th>SL#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role </th>
                <th>Status </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{index + 1}</td>
                  <td>{tdata.name}</td>
                  <td>{tdata.email}</td>
                  <td>{tdata.phone}</td>
                 
                  <td>
                    <div className={styles.table_status}>
                      <span className="legend_indicator"></span>Active
                    </div>
                  </td>
                  <td>
                    <div  className={styles.switch_button}>
                    <Switch value={isSwitchOn} onChange={switch_onChange_handle} />
                    </div>
                  
                  </td>
                  <td>
                    <div  className={styles.action_buttons}>
                  <button type="button" className="btn btn-primary"><i className="bi bi-eye"></i></button>
              <button type="button" className="btn btn-success"><i className="bi bi-pencil-square"></i></button>
            <button type="button" className="btn btn-danger"><i className="bi bi-trash"></i></button>
            </div>  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserTable;
