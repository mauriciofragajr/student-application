import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class UpdateStudentInput {
    @Field()
    @IsOptional({message: 'Optional field'})
    @IsString()
    @MinLength(3, { message: 'Name is too short. Minimal length is $constraint1 characters, but actual is $value' })
    @MaxLength(50, { message: 'Name is too long. Maximal length is $constraint1 characters, but actual is $value' })
    name?: string;

    @Field()
    @IsOptional()
    @IsEmail()
    email?: string;
}