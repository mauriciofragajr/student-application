import { gql, useMutation } from "@apollo/client";

const CREATE_STUDENT = gql`
  mutation createOneStudent($input: CreateOneStudentInput!) {
    createOneStudent(input: $input) {
      cpf
      name
      email
    }
  }
`

export const useCreateStudent = (): any | undefined => {
  const [createOneStudent, { loading, data, error }] = useMutation(CREATE_STUDENT);
  return [createOneStudent, { loading, data, error }];
}
