// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react';

const PatientContext = createContext();

export const usePatients = () => {
    return useContext(PatientContext);
};

// eslint-disable-next-line react/prop-types
export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/patients')
            .then(response => response.json())
            .then(data => {
                setPatients(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    const value = {
        loading,
        patients,
    };

    return (
        <PatientContext.Provider value={value}>
            {children}
        </PatientContext.Provider>
    );
};
