import {
  Entity, PrimaryGeneratedColumn, Column,
  BaseEntity, ManyToOne, OneToMany
} from 'typeorm';
import UserEntity from './user.entity';
import OfferEntity from './offer.entity';

@Entity()
export default class ProjectEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;
  
  @Column({ length: 500 })
  description: string;

  // n:1 relation with user
  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity;

  // 1:n relation with offer 
  @OneToMany( type => OfferEntity , offer => offer.project)
  offers: OfferEntity[];
}
