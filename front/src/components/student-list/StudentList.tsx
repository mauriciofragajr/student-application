import React from 'react';

import { Student } from "../../domain/interfaces/Student";
import { useGetStudents } from "../../hooks/students/useGetStudents";
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';

const StudentList: React.FC = () => {
  const { loading, data } = useGetStudents()

  const rows: Student[] = data?.students.nodes || []

  return (
    <div>
      {loading? (<p>Carregando...</p>) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>Tabela de estudantes</caption>
            <TableHead>
              <TableRow>
                <TableCell>CPF</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>E-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.cpf}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default StudentList;