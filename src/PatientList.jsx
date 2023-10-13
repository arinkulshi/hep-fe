// eslint-disable-next-line no-unused-vars
import React from 'react';
import { usePatients } from './PatientContext';
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const PatientList = () => {
    const { loading, patients } = usePatients();

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Injury Type</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {patients.map(patient => (
                    <TableRow key={patient.PatientID}>
                        <TableCell>{patient.PatientID}</TableCell>
                        <TableCell>{patient.Name}</TableCell>
                        <TableCell>{patient.InjuryType}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PatientList;
