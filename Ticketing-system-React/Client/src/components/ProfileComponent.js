import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, InputLabel, Input, Box } from '@material-ui/core';
import { Table, TableHead, TableCell, TableRow, TableBody, } from '@material-ui/core';
import moment from 'moment';
import { createTicketAction, getTicketAction, updateTicketAction, resolvedTicketAction } from '../actions/tickets';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';



export default function FormDialog() {

  const [userold] = useState(JSON.parse(localStorage.getItem('user')));

  const [ticket, setticket] = useState({ empid: "", ticket_desc: "", empname: userold.accessToken.fullname });

  const dispatch = useDispatch();


  // This selector is for showing table details
  const allTickets = useSelector((ticket) => ticket.tickets)

  const [currentId, setcurrentId] = useState(0);

  // This selector is for populating modal form
  const allTicketss = useSelector((state) => (currentId ? state.tickets.find((message) => message._id === currentId) : null));

  useEffect(() => {
    if (allTicketss) setticket(allTicketss);
  }, [allTicketss]);


  useEffect(() => {
    dispatch(getTicketAction());
  }, [currentId, dispatch]);



  const validateDetails = (e) => {
    e.preventDefault();

    if (currentId === 0) {

      dispatch(createTicketAction(ticket));
      setcurrentId(0);
      setticket({ ...ticket, empid: '', ticket_desc: '' })
    } else {

      dispatch(updateTicketAction(currentId, ticket))
      setcurrentId(0);
      setticket({ ...ticket, empid: '', ticket_desc: '' })
    }
    setOpen(false)
  }



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);


  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(allTickets.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allTickets.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allTickets]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allTickets.length;
    setItemOffset(newOffset);
  };


  return (
    <div>
      <Box textAlign='center' style={{margin: '20px 0'}}>
        <Button variant="contained" color="success" onClick={handleClickOpen}>
          Create Ticket
        </Button>
      </Box>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center">Add Ticket</DialogTitle>
        <DialogContent>
          <FormGroup>
            <InputLabel htmlFor="empid" >Employee ID</InputLabel>
            <Input
              onChange={(e) => setticket({ ...ticket, empid: e.target.value })}
              fullWidth
              required
              name="empid"
              value={ticket.empid}
              id="empid"
              inputProps={{ maxLength: 50 }}

            />
          </FormGroup>

          <TextField
            sx={{
              maxWidth: "100%",
              marginTop: "30px",
            }}
            disabled
            fullWidth
            id="outlined-disabled"
            label="EMPLOYEE NAME"
            defaultValue={ticket.empname}
          />

          <TextField
            id="outlined-disabled"
            label="Ticket Desc"
            fullWidth
            required
            name="ticket_desc"
            value={ticket.ticket_desc}
            onChange={(e) =>
              setticket({ ...ticket, ticket_desc: e.target.value })
            }
            sx={{
              marginTop: "20px",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={validateDetails}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Table >
        <TableHead>
          <TableRow >
            {/* <TableCell>Id</TableCell> */}
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Ticket Description</b></TableCell>
            <TableCell><b>Employee Id</b></TableCell>
            <TableCell><b>Created At</b></TableCell>
            <TableCell><b>Updated At</b></TableCell>
            <TableCell><b>Resolved At</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems?.map((tkt) => (
            <TableRow key={tkt._id}>

              {/* <TableCell>{user._id+1}</TableCell>  */}
              <TableCell>{tkt.empname}</TableCell>
              <TableCell>{tkt.ticket_desc}</TableCell>
              <TableCell>{tkt.empid}</TableCell>
              <TableCell>{tkt.create_at ? moment(tkt.Date).fromNow() : null}</TableCell>
              <TableCell>{tkt.updated_at ? moment(tkt.updated_at).fromNow() : null}</TableCell>
              <TableCell>{tkt.deleted_at ? moment(tkt.deleted_at).fromNow() : null}</TableCell>
              <TableCell>

                {(userold?.accessToken.fullname === tkt?.empname) ? (

                  <>
                    <Button color="primary" disabled={tkt.deleted_at} variant="contained" style={{ marginRight: 10 }} onClick={() => { setcurrentId(tkt._id); handleClickOpen() }}>Edit</Button>
                    <Button color="secondary" disabled={tkt.deleted_at} variant="contained" onClick={() => dispatch(resolvedTicketAction(tkt))}>Resolved!</Button>
                  </>
                ) : (
                  <>
                    <Button color="primary" disabled={true} variant="contained" style={{ marginRight: 10 }} onClick={() => { setcurrentId(tkt._id); handleClickOpen() }}>Edit</Button>
                    <Button color="secondary" disabled={true} variant="contained" onClick={() => dispatch(resolvedTicketAction(tkt))}>Resolved!</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />

    </div>
  );
}




