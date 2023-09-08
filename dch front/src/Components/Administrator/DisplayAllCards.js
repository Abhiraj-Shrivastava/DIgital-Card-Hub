import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { getData } from ".././Services/NodeServices";
import MaterialTable from "@material-table/core";
import { useStyles } from "./DisplayAllCategoryCss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { postData } from ".././Services/NodeServices";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import { useContext } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

export default function DisplayAllCards(props) {
  var theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const [enquiries, setEnquiries] = useState([]);
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [socket, setSocket] = React.useState();
  const [checked, setChecked] = React.useState(true);

  const handleChange = async(id,status) => {
   var formData = new FormData();
   formData.append("_id",id);
   formData.append("cardStatus",status=="Active"?"inActive":"Active");
   const response= await postData('carddetails/updateCardStatus',formData,true)
    fetchAllEnquiries();
  };

  useEffect(
    function () {
      fetchAllEnquiries();
    },
    [socket]
  );

  const handleOpen = (rowData) => {
    setData(rowData);

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const showCategory = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bolder" }}>
                Card Details
              </Grid>
              <Grid item xs={12}>
                Company Id : {data.companyId}
              </Grid>

              <Grid item xs={12}>
                Company Name : {data.companyname}
              </Grid>

              <Grid item xs={12}>
                Full Name : {data.fullname}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ cursor: "pointer" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  function displayTable() {
    return (
      <MaterialTable
        title={"Enquiry List"}
        data={enquiries}
        style={{}}
        columns={[
          {
            title: "Card Status",
            render: (rowData) => (
              <div>
                <Switch
                  checked={rowData.cardStatus=="Active"?true:false}
                  onChange={()=>handleChange(rowData._id,rowData.cardStatus)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            ),
          },
          {
            title: "Card Id",
            field: "_id",
          },
          {
            title: "Company Name",
            field: "companyname",
          },
          {
            title: " Name",
            field: "fullname",
          },
          {
            title: " Created Date",
            field: "createdDate",
          },
          {
            title: " Payment Status",
            field: "paymentStatus",
          },

          {
            title: "Phone Number",
            field: "phoneNumber",
          },
          
          {
            title: "Card Details",
            render: (rowData) => (
              <div>
                <Button variant="contained" onClick={() => handleOpen(rowData)}>
                  Show
                </Button>
              </div>
            ),
          },
        ]}
        actions={[]}
      />
    );
  }

  const fetchAllEnquiries = async () => {
    const result = await getData("carddetails/displayallcards");
    console.log(result);
    setEnquiries(result.reverse());
   
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        style={{ marginTop: 20, fontSize: matches ? 10 : 20 }}
      >
        {displayTable()}
      </Grid>
      {showCategory()}{" "}
    </Grid>
  );
}
