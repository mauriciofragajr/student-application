import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreateStudentInput {
    @Field()
    @IsString()
    @IsNotEmpty({ message: 'CPF is empty' })
    cpf: string;

    @Field()
    @IsString()
    @IsNotEmpty({ message: 'Name is empty' })
    @MinLength(3, { message: 'Name is too short. Minimal length is $constraint1 characters, but actual is $value' })
    @MaxLength(50, { message: 'Name is too long. Maximal length is $constraint1 characters, but actual is $value' })
    name: string;

    @Field()
    @IsEmail()
    @IsNotEmpty({ message: 'Email is empty' })
    email: string;
}