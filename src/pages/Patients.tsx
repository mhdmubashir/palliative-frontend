import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Pagination
} from '@mui/material';
import { tableThStyle } from '../constants/stylesText';

interface PatientDetails {
  patient_id: number;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  contact_number: string;
  email: string;
  address: string;
  blood_group: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  medical_history: string;
  allergies: string;
  registration_date: string;
  assigned_doctor: string;
  location: string;
  media: string;
}

const PatientManagement: React.FC = () => {
  const [patients, setPatients] = useState<PatientDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatient, setSelectedPatient] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("./patientsData.json");
        const data = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load patient data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.assigned_doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handleRowClick = (patient:any) => {
    setSelectedPatient(patient);
  };

  const handleClosePopup = () => {
    setSelectedPatient(null);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9fafb', marginLeft: "250px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Patient Management</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert('Open Add Patient Dialog')}
        >
          Add New Patient
        </Button>
      </div>
      <TextField
        label="Search Patients"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
        style={{ marginBottom: '1rem' }}
      />

      {error && <Alert severity="error" style={{ marginBottom: '1rem' }}>{error}</Alert>}

      {loading && (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <CircularProgress />
        </div>
      )}

      {!loading && patients.length === 0 && !error && (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Alert severity="info">No patients available. Please add some patients.</Alert>
        </div>
      )}

      {!loading && patients.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={tableThStyle}>First Name</TableCell>
                <TableCell  style={tableThStyle}>Last Name</TableCell>
                <TableCell  style={tableThStyle}>Gender</TableCell>
                <TableCell style={tableThStyle}>Date of Birth</TableCell>
                <TableCell style={tableThStyle}>Contact Number</TableCell>
                <TableCell style={tableThStyle}>Assigned Doctor</TableCell>
                <TableCell  style={tableThStyle}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedPatients.map((patient) => (

                <TableRow key={patient.patient_id} onClick={()=> handleRowClick(patient)} style={{cursor : 'pointer'}}>
                  <TableCell>{patient.first_name}</TableCell>
                  <TableCell>{patient.last_name}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.date_of_birth}</TableCell>
                  <TableCell>{patient.contact_number}</TableCell>
                  <TableCell>{patient.assigned_doctor}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => alert(`Editing patient ID: ${patient.patient_id}`)}
                      style={{ marginRight: '0.5rem' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => alert(`Deleting patient ID: ${patient.patient_id}`)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Pagination
          count={Math.ceil(filteredPatients.length / itemsPerPage)}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          color="primary"
        />
      </div>
      
      {/* {selectedPatient && (
        <div className="popup-container">
          <div className="popup">
            <button className="close-btn" onClick={handleClosePopup}>X</button>
            <div className="popup-content">
              <img
                src={`https://via.placeholder.com/150?text=${patient.first_name}`}
                alt="Patient"
                className="popup-image"
              />
              <div className="popup-details">
                <h3>{selectedPatient.name}</h3>
                <p>Age: {selectedPatient.age}</p>
                <p>Gender: {selectedPatient.}</p>
                <p>Address: {selectedPatient.address}</p>
              </div>
            </div>
          </div>
          <div className="popup-backdrop" onClick={handleClosePopup}></div>
        </div>
      )} */}
    </div>
  );
};

export default PatientManagement;
