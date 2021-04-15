import {
  Entity, PrimaryGeneratedColumn,
  Column, BaseEntity, OneToMany
} from 'typeorm';
import BookEntity from './book.entity';
import ProjectEntity from './project.entity';
import OfferEntity from './offer.entity';


@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  // 1:n relation with bookEntity 
  @OneToMany( type => BookEntity , book => book.user)
  books: BookEntity[];

  // 1:n relation with projectEntity 
  @OneToMany( type => ProjectEntity , project => project.user)
  projects: ProjectEntity[];

  // 1:n relation with offerEntity 
  @OneToMany( type => OfferEntity , offer => offer.user)
  offers: OfferEntity[];
}
