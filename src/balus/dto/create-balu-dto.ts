import { MinLength } from "class-validator"

export class CreateBaluDto{
    @MinLength(5)
    name: string
    weapon: 'guns' | 'knife'
}