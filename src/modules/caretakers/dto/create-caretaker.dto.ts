import { IsString, IsEmail, IsMobilePhone, IsDate } from 'class-validator';

export class CreateCaretakerDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsMobilePhone('es-Es')
  readonly phone: string;

  @IsDate()
  readonly birthDate: Date;

  @IsString()
  readonly address: string;

}
