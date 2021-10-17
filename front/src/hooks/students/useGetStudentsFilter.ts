import { gql, useLazyQuery } from "@apollo/client";
import { Student } from "../../domain/interfaces/Student";

interface OffsetPageInfo {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

interface StudentsData {
  students: {
    pageInfo?: OffsetPageInfo
    nodes: Student[]
    totalCount?: number
  }
}

const GET_STUDENTS_FILTER = gql`
    query students($filter: StudentFilter!, $paging: OffsetPaging!) {
      students(filter: $filter, paging: $paging) {
        nodes {
          cpf
          name
          email
        },
        totalCount
      }
    }
  `

export const useGetStudentsFilter = (): any | undefined => {
  const [students, { loading, data }] = useLazyQuery<StudentsData>(GET_STUDENTS_FILTER)
  return [students, { loading, data }]
}