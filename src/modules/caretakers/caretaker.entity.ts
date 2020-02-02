import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt, DataType, AllowNull, IsEmail, IsDate, PrimaryKey, Unique, AutoIncrement, HasMany } from 'sequelize-typescript';
import { IsMobilePhone } from 'class-validator';
import { Dog } from '../dogs/dog.entity';

@Table({
  paranoid: false,
  tableName: 'caretaker',
})
export class Caretaker extends Model<Caretaker> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @IsEmail
  @AllowNull(false)
  @Column
  email: string;

  @IsMobilePhone('es-Es')
  @AllowNull(false)
  @Column
  phone: string;

  @IsDate
  @AllowNull(false)
  @Column
  birthDate: Date;

  @AllowNull(false)
  @Column
  address: string;

  @HasMany(() => Dog, { foreignKey: 'caretakerId', onDelete: 'cascade' })
  dogs: Dog[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
