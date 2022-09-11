import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from "react";
import { Button } from '@mui/material';


export default function ClassesTimeTableComponent(props) {

    return (
        <TableContainer component={Paper} sx={{width: '90%', margin: 'auto', marginTop: '20px'}} >
            <Table sx={{ }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{ width: '10%' }}>Saatler</TableCell>
                        <TableCell sx={{ width: '18%' }}>Pazartesi</TableCell>
                        <TableCell sx={{ width: '18%' }}>Salı</TableCell>
                        <TableCell sx={{ width: '18%' }}>Çarşamba</TableCell>
                        <TableCell sx={{ width: '18%' }}>Perşembe</TableCell>
                        <TableCell sx={{ width: '18%' }}>Cuma</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.rows.map((row) => (
                    <TableRow
                    >
                    <TableCell>{row.hour}</TableCell>
                    <TableCell>{row.monday}</TableCell>
                    <TableCell>{row.tuesday}</TableCell>
                    <TableCell>{row.wednesday}</TableCell>
                    <TableCell>{row.thursday}</TableCell>
                    <TableCell>{row.friday}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}