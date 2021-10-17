import React from 'react';
import { useForm } from 'react-hook-form';
import { Stack, TextField } from '@mui/material';

import { Student } from '../../domain/interfaces/Student';
import { useCreateStudent } from '../../hooks/students/useCreateStudent';

const StudentForm: React.FC = () => {
  const { register, handleSubmit } = useForm<Student>();
  const [createOneStudent, { loading, data, error }] = useCreateStudent();

  const onSubmit = handleSubmit((student: Student) => {
    createOneStudent({ variables: { input: { student } } });
  });

  return (
    <div>
      {loading ? (<p>Enviando</p>) : (
        <div>
          {error ? <p>{error.message}</p> : null}
          {data ? <p>Salvo!</p> : null}
          <form onSubmit={onSubmit} style={{ margin: 100 }}>
            <Stack spacing={2}>
              <TextField type="text" {...register("cpf", { required: true })} label="CPF" variant="outlined" />
              <TextField type="text" {...register("name", { required: true })} label="Nome" variant="outlined" />
              <TextField type="email" {...register("email", { required: true })} label="E-mail" variant="outlined" />
              <TextField type="submit" value="Adicionar" />
            </Stack>
          </form>
        </div>
      )}
    </div>
  )
}

export default StudentForm;