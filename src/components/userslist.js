import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import React, { useContext, useEffect, useState } from "react";
import UserApi from '../api/userapi';

function UsersListComponent() {

    const [users, setUsers] = useState([]);
    const userApi = new UserApi();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        const response = (await userApi.getUsers()).data;
        console.log(response);
        setUsers(response);
    }


    return (
        <TableContainer sx={{width: '100%', margin: 'auto', marginTop: '20px', gridColumn: 'span 3'}} >
            <Table sx={{ }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{ width: '40%' }}>İsim</TableCell>
                        <TableCell sx={{ width: '45%' }}>Kullanıcı Adı</TableCell>
                        <TableCell sx={{ width: '15%' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {users.map((row) => (
                    <TableRow>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>
                        <IconButton><EmailIcon/></IconButton>
                        {(localStorage.getItem("role") === 'ADMIN') &&<IconButton><DoDisturbIcon/></IconButton>}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersListComponent;