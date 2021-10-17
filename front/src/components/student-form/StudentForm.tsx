import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Backdrop, CircularProgress, Stack, TextField } from '@mui/material';

import { Student } from '../../domain/interfaces/Student';
import { useCreateStudent } from '../../hooks/students/useCreateStudent';

import InputMask from 'react-input-mask';

const StudentForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Student>();
  const [createOneStudent, { loading, data, error }] = useCreateStudent();

  const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '');

  const cpf = register('cpf', { required: true, validate: value => onlyNumbers(value).length === 11 });
  const name = register("name", { required: true, minLength: 3, maxLength: 150 });
  const email = register("email", { required: true });

  const onSubmit = handleSubmit(async (student: Student) => {
    try {
      await createOneStudent({ variables: { input: { student } } });
      reset();
    } catch (e) {
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit} style={{ margin: 100 }}>
        <Stack spacing={2}>
          <InputMask
            mask="999.999.999-99"
            disabled={false}
            name={cpf.name}
            onChange={cpf.onChange}
            onBlur={cpf.onBlur}
            inputRef={cpf.ref}
          >
            <TextField type="text" label="CPF" variant="outlined" />
          </InputMask>
          <TextField type="text" {...name} label="Nome" variant="outlined" />
          <TextField type="email" {...email} label="E-mail" variant="outlined" />
          {error ? <Alert severity="error">{error.message === 'Entity already exists' ? 'CPF já cadastrado' : 'CPF inválido'}</Alert> : null}
          {data ? <Alert severity="success">Salvo com sucesso!</Alert> : null}
          <TextField type="submit" value="Adicionar" />
        </Stack>
      </form>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default StudentForm;