import { gql, useQuery } from "@apollo/client";
import { Student } from "../../domain/interfaces/Student";

interface OffsetPageInfo {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  }
  
  interface StudentsData {
    students: {
      pageInfo: OffsetPageInfo
      nodes: Student[]
      totalCount: number
    }
  }
  
  const GET_STUDENTS = gql`
    {
      students {
        nodes {
          cpf,
          name,
          email
        },
        totalCount,
        pageInfo {
          hasNextPage,
          hasPreviousPage
        }
      }
    }
  `

  export const useGetStudents = (): any | undefined => {
    const { loading, data } = useQuery<StudentsData>(GET_STUDENTS)
    return { loading, data }
  }