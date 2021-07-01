import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useDropzone } from "react-dropzone";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 16,
  },
  indicator: {
    backgroundColor: "blue",
  },
  table: {
    minWidth: 650,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  tabLabel:{
    color: "black",
    fontWeight:'600'
  }
}));

function FileUpload(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  console.log("acceptedFiles", acceptedFiles);
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>

      <Button
        variant="contained"
        color="primary"
        fullWidth={false}
        style={{ alignSelf: "flex-end", marginTop: "20px" }}
        onClick={()=>{props.setValue(1)}}
      >
        Preview
      </Button>
    </section>
  );
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function PreviewTable(props) {
  const classes = useStyles();

  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="inherit" fullWidth={false}  onClick={()=>{props.setValue(0)}}>
          Back
        </Button>
        <Button variant="contained" color="primary" fullWidth={false}  onClick={()=>{props.setValue(2)}}>
          Proceed to appoval
        </Button>
      </div>
    </div>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ApprovalForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      <div
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ marginBottom: "40px" }}>
            <p className="label">Justification</p>
            <input />
          </div>
          <div>
            <p className="label">Request Owner Email</p>
            <input />
          </div>
          <div>
            <p className="label">Request Approval Email</p>
            <input />
          </div>
        </div>
        <div className="box2">
          <div>
            <p className="label">Current item Status</p>
            <Select value={age} onChange={handleChange}>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>InActive</MenuItem>
            </Select>
          </div>
          <div>
            <p className="label">New item Status</p>
            <Select value={age} onChange={handleChange}>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>InActive</MenuItem>
            </Select>
          </div>
          <div>
            <p className="label">PickSlip Number</p>
            <input />
          </div>
          <div>
            <p className="label">Customer Name</p>
            <input />
          </div>
          <div>
            <p className="label">Customer Address</p>
            <input />
          </div>
        </div>
        <div>
          <div>
            <p className="label">Current Supply Chain Status</p>
            <Select value={age} onChange={handleChange}>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>InActive</MenuItem>
            </Select>
          </div>

          <div>
            <p className="label">New Supply Chain Status</p>
            <Select value={age} onChange={handleChange}>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>InActive</MenuItem>
            </Select>
          </div>

          <div>
            <p className="label">Invoice Number</p>
            <input />
          </div>

          <div>
            <p className="label">Customer ID</p>
            <input />
          </div>

          <div>
            <p className="label">Country</p>
            <Select value={age} onChange={handleChange}>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>InActive</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth={false}
        style={{ alignSelf: "flex-end", marginTop: "20px" }}
        onClick={handleClickOpen}
      >
        Submit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
       
        // aria-labelledby="alert-dialog-slide-title"
        // aria-describedby="alert-dialog-slide-description"
      >
        <div style={{padding:'30px',width:"20vw",display:'flex',flexDirection:'column',alignItems: 'center'}}>
        <div className="done-icon">
        <img src="https://img.icons8.com/color/48/000000/checkmark--v1.png"/>
        </div>
        <p style={{textAlign:'center',fontWeight:'600'}}>Your request gas been submitted !</p>
       
        <div style={{display:'flex',justifyContent:"space-around",width:'100%'}}>
    
          <Button onClick={handleClose} variant="outlined" color="primary">
            Done
          </Button>
          <Button onClick={handleClose} variant="outlined" color="primary">
            View Approval Status
          </Button>
        </div>
        </div>
      </Dialog>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, setValue,...other } = props;
  return (
    <div>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ width: "60vw", margin: "auto" }}>
      <Paper position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label={ <span className={classes.tabLabel}>Upload Files</span>} disabled />
          <Tab label={ <span className={classes.tabLabel}>Preview</span>} disabled  />
          <Tab label={ <span className={classes.tabLabel}>Submission For Approval</span>} disabled  />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}  >
        <FileUpload setValue={setValue}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PreviewTable  setValue={setValue}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ApprovalForm  setValue={setValue} />
      </TabPanel>
    </div>
  );
}
