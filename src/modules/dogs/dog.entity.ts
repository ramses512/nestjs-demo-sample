import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt, DataType, AllowNull, AutoIncrement, Unique, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Caretaker } from '../caretakers/caretaker.entity';

@Table({
  paranoid: false,
  tableName: 'dog',
})
export class Dog extends Model<Dog> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @ForeignKey(() => Caretaker)
  @Column(DataType.INTEGER)
  caretakerId: number;

  @BelongsTo(() => Caretaker, { foreignKey: 'caretakerId', onDelete: 'cascade' })
  caretaker: Caretaker;

  @AllowNull(false)
  @Column
  gender: string;

  @AllowNull(false)
  @Column
  breed: string;

  @AllowNull(false)
  @Column
  age: number;

  @AllowNull(false)
  @Column
  size: string;

  @Column(DataType.TEXT)
  description: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
