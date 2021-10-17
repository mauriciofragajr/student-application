import React, { useEffect } from 'react';
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, TextField, Box } from '@mui/material';

import { Student } from "../../domain/interfaces/Student";
import { useGetStudentsFilter } from '../../hooks/students/useGetStudentsFilter';
import { useForm } from 'react-hook-form';

const StudentList: React.FC = () => {
  const [students, { loading, data }] = useGetStudentsFilter();
  const { register, handleSubmit } = useForm<Student>();

  const rows: Student[] = data?.students.nodes || []

  const searchStudents = async (student: Student) => {
    try {
      await students({
        variables: {
          paging: { offset: 0, limit: 10 },
          filter: {
            cpf: {
              iLike: `%${student.cpf}%`
            },
            name: {
              iLike: `%${student.name}%`
            },
            email: {
              iLike: `%${student.email}%`
            }
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    searchStudents({ cpf: '', name: '', email: '' });
  }, []);

  const onSubmit = handleSubmit(async (student: Student) => {
    try {
      await searchStudents(student);
    } catch (e) {
    }
  });

  return (
    <div style={{ margin: 20 }}>
      {loading ? (<p>Carregando...</p>) : (
        <div>
          <form onSubmit={onSubmit}>
            <Box sx={{ display: 'flex' }} justifyContent="center">
              <Box sx={{ mx: 0.5 }}>
                <TextField type="text" {...register("cpf")} label="CPF" variant="outlined" />
              </Box>
              <Box sx={{ mx: 0.5 }}>
                <TextField type="text" {...register("name")} label="Nome" variant="outlined" />
              </Box>
              <Box sx={{ mx: 0.5 }}>
                <TextField type="text" {...register("email")} label="E-mail" variant="outlined" />
              </Box>
              <Box sx={{ mx: 0.5 }}>
                <TextField type="submit" value="Pesquisar" />
              </Box>
              <Box sx={{ mx: 0.5 }}>
                <TextField type="reset" value="Limpar" />
              </Box>
            </Box>
          </form>

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
                  <TableRow key={row.cpf}>
                    <TableCell>{row.cpf}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  )
}

export default StudentList;