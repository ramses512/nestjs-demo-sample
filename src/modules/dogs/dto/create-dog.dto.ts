import { IsString, IsNumber } from 'class-validator';

export class CreateDogDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly caretakerId: number;

  @IsString()
  readonly gender: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsString()
  readonly size: string;

  @IsString()
  readonly description: string;
}
