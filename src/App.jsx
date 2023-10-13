// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PatientProvider } from './PatientContext';
import PatientList from './PatientList';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';

function App() {
    return (
        <PatientProvider>
            <CssBaseline />
            <Container component={Paper} style={{ padding: '2rem', marginTop: '2rem' }}>
                <Typography variant="h4" gutterBottom>
                    Patient List
                </Typography>
                <PatientList />
            </Container>
        </PatientProvider>
    );
}

export default App;
