import axios from "axios";
import React, { useEffect, useState } from "react";

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [gsisId, setGsisId] = useState('');
    const [pagIbigId, setPagIbigId] = useState('');
    const [philhealthId, setPhilhealthId] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [tinNo, setTinNo] = useState('');
    const [agencyEmployee, setAgencyEmployee] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residentialAddress, setResidentialAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    useEffect (() => {
        if (item) {
            setFirstName(item.firstName);
            setMiddleName(item.middleName);
            setLastName(item.lastName);
            setEmail(item.email);
            setPhone(item.phone);
            setDateOfBirth(item.dateOfBirth);
            setPlaceOfBirth(item.placeOfBirth);
            setSex(item.sex);
            setCivilStatus(item.civilStatus);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.bloodType);
            setGsisId(item.gsisId);
            setPagIbigId(item.pagIbigId);
            setPhilhealthId(item.philhealthId);
            setSssNo(item.sssNo);
            setTinNo(item.tinNo);
            setAgencyEmployee(item.agencyEmployee);
            setCitizenship(item.citizenShip);
            setZipCode(item.zipCode);
            setPermanentAddress(item.permanentAddress);
            setZipCode(item.zipCode);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { firstName, middleName, lastName, email, phone, dateOfBirth, placeOfBirth, sex, civilStatus, height, weight, bloodType, gsisId, pagIbigId, philhealthId, sssNo, tinNo, agencyEmployee, citizenship,  residentialAddress, permanentAddress, zipCode };
        try {
             if (item){
                await 
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
             } else {
                await 
                axios.post(`http://localhost:8000/api/items/`, data);
             }
             onSuccess();
            } catch (error) {
               console.error('There was an error submitting the form!', error);
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" 
                    value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" 
                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Mobile No.:</label>
                    <input type="text" 
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="text" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Date Of Birth:</label>
                    <input type="text" 
                    value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <div>
                    <label>Place Of Birth:</label>
                    <input type="text" 
                    value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                </div>
                <div>
                    <label>Sex:</label>
                    <input type="text" 
                    value={sex} onChange={(e) => setSex(e.target.value)} />
                </div>
                <div>
                    <label>Civil Status:</label>
                    <input type="text" 
                    value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
                </div>
                <div>
                    <label>Height:</label>
                    <input type="text" 
                    value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <label>Weight:</label>
                    <input type="text" 
                    value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>Blood Type:</label>
                    <input type="text" 
                    value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
                </div>
                <div>
                    <label>Gsis ID No.:</label>
                    <input type="text" 
                    value={gsisId} onChange={(e) => setGsisId(e.target.value)} />
                </div>
                <div>
                    <label>Pag-Ibig ID No.:</label>
                    <input type="text" 
                    value={pagIbigId} onChange={(e) => setPagIbigId(e.target.value)} />
                </div>
                <div>
                    <label>Philhealt No.:</label>
                    <input type="text" 
                    value={philhealthId} onChange={(e) => setPhilhealthId(e.target.value)} />
                </div>
                <div>
                    <label>SSS No.:</label>
                    <input type="text" 
                    value={sssNo} onChange={(e) => setSssNo(e.target.value)} />
                </div>
                <div>
                    <label>TIN No.:</label>
                    <input type="text" 
                    value={tinNo} onChange={(e) => setTinNo(e.target.value)} />
                </div>
                <div>
                    <label>Agency Employee No.:</label>
                    <input type="text" 
                    value={agencyEmployee} onChange={(e) => setAgencyEmployee(e.target.value)} />
                </div>
                <div>
                    <label>Citizenship:</label>
                    <input type="text" 
                    value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
                </div>
                <div>
                    <label>Residential Address:</label>
                    <input type="text" 
                    value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" 
                    value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <div>
                    <label>Permanent Address:</label>
                    <input type="text" 
                    value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" 
                    value={zipCode} 
                    onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
};
export default ItemForm;