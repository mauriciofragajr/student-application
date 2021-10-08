import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentDTO {
    @FilterableField()
    cpf: string;

    @FilterableField()
    name: string;

    @FilterableField()
    email: string;
}