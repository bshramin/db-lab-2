import {
  Entity, PrimaryGeneratedColumn, Column,
  BaseEntity, ManyToOne, ManyToMany, JoinTable
} from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';

@Entity()
export default class BookEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  // n:1 relation with books
  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity;

  // n:n relation with genre
  @ManyToMany(type => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
