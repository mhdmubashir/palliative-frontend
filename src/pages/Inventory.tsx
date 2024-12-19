import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import {
  TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  // Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress, Alert,
  //Pagination
} from '@mui/material';
// import { apiAddItem, apiDeleteItem, apiGetItems, apiUpdateItem, baseUrl } from '../constants/apiConstants';
import { tableThStyle } from '../constants/stylesText';

interface StockItem {
  id: number;
  name: string;
  quantity: number;
  description: string;
  category: string;
  expirationDate: string;
}

const InventoryStockManage: React.FC = () => {
  const [items, setItems] = useState<StockItem[]>([]);
  //srcj
  // const [searchTerm, setSearchTerm] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;

  // const [newItem, setNewItem] = useState<StockItem>({
  //   id: 0,
  //   name: '',
  //   quantity: 0,
  //   description: '',
  //   category: '',
  //   expirationDate: '',
  // });
  // const [editing, setEditing] = useState<boolean>(false);
  // const [editItem, setEditItem] = useState<StockItem | null>(null);
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  //FetchJson
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./stockAndAssets.json"); 
      const jsonData = await response.json();
      setItems(jsonData);
    };

    fetchData();
  }, []);

  //searh
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  //   setCurrentPage(1);
  // };
//filteer
  // const filteredItems = items.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.category.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  //pagnate
  // const paginatedItems = filteredItems.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );


  // Fetch items from the backend
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(baseUrl + apiGetItems)
  //     .then(response => {
  //       setItems(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         setError(`Error: ${error.response.data.message || error.response.statusText}`);
  //       } else if (error.request) {
  //         setError('Error: No response from server');
  //       } else {
  //         setError(`Error: ${error.message}`);
  //       }
  //       setLoading(false);
  //     });
  // }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setNewItem({ ...newItem, [name]: value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (editing && editItem) {
  //     // Update the item
  //     axios.put(baseUrl + apiUpdateItem + editItem.id, newItem)
  //       .then(response => {
  //         setItems(items.map(item =>
  //           item.id === editItem.id ? { ...item, ...newItem } : item
  //         ));
  //         setEditing(false);
  //         setEditItem(null);
  //         setOpenDialog(false);
  //       })
  //       .catch(error => setError('There was an error updating the item.'));
  //   } else {
  //     // Add a new item
  //     axios.post(baseUrl + apiAddItem, newItem)
  //       .then(response => {
  //         setItems([...items, response.data]);
  //         setOpenDialog(false);
  //       })
  //       .catch(error => setError('There was an error adding the item.'));
  //   }
  //   setNewItem({
  //     id: 0,
  //     name: '',
  //     quantity: 0,
  //     description: '',
  //     category: '',
  //     expirationDate: '',
  //   });
  // };

  // const handleEdit = (item: StockItem) => {
  //   setNewItem(item);
  //   setEditItem(item);
  //   setEditing(true);
  //   setOpenDialog(true);
  // };

  // const handleDelete = (id: number) => {
  //   axios.delete(baseUrl + apiDeleteItem + id)
  //     .then(() => {
  //       setItems(items.filter(item => item.id !== id));
  //     })
  //     .catch(error => setError('There was an error deleting the item.'));
  // };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9fafb', marginLeft: "250px" }}>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Inventory Management</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert('Open Add Item Dialog')}
        >
          Add New Item
        </Button>
      </div>
      <TextField
        label="Search Items"
        variant="outlined"
        fullWidth
       // onChange={handleSearch}
        style={{ marginBottom: '1rem' }}
      />
     
<br />
      {/* Display error message if there's an error */}
      {
      // error && <Alert severity="error" style={{ marginBottom: '1rem' }}>{error}</Alert>
      }

      {/* Loading indicator */}
      {
      // loading && (
      //   <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      //     <CircularProgress />
      //   </div>
      // )
      }

      {/* No data available message */}
      {
      // items.length === 0 && !loading && !error && (
      //   <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      //     <Alert severity="info">No items available. Please add some items.</Alert>
      //   </div>
      // )
      }

      {/* Stock Table */}
      {
      // !loading && items.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={tableThStyle}>Item Name</TableCell>
                <TableCell style={tableThStyle}>Quantity</TableCell>
                <TableCell style={tableThStyle}>Description</TableCell>
                <TableCell style={tableThStyle}>Category</TableCell>
                <TableCell style={tableThStyle}>Expiration Date</TableCell>
                <TableCell style={tableThStyle}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.expirationDate} N/a</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                     // onClick={() => handleEdit(item)}
                      style={{ marginRight: '0.5rem' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                    //  onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      // )
      }

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {/* <Pagination
          count={Math.ceil(filteredItems.length / itemsPerPage)}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          color="primary"
        /> */}
   </div>
      

      {/* Dialog for Adding/Editing Item */}
      {/* <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editing ? 'Edit Item' : 'Add Item'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Item Name"
              name="name"
              value={newItem.name}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: '1rem' }}
              required
            />
            <TextField
              label="Quantity"
              name="quantity"
              value={newItem.quantity}
              onChange={handleChange}
              type="number"
              fullWidth
              style={{ marginBottom: '1rem' }}
              required
            />
            <TextField
              label="Description"
              name="description"
              value={newItem.description}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Category"
              name="category"
              value={newItem.category}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Expiration Date"
              name="expirationDate"
              value={newItem.expirationDate}
              onChange={handleChange}
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginBottom: '1rem' }}
              required
            />
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {editing ? 'Update Item' : 'Add Item'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog> */}
     
    </div>
  );
};

export default InventoryStockManage;
