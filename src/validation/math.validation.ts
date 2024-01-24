import { IsNumber, Min } from 'class-validator';

export class FactorialCalculationDto {
  @IsNumber()
  @Min(0)
  number!: number;
}
