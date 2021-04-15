import {
  Entity, PrimaryGeneratedColumn, Column,
  BaseEntity, OneToOne
} from 'typeorm';
import UserEntity from './user.entity';
import OfferEntity from './offer.entity';
 

@Entity()
export default class JudgmentEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;
  
  @Column({ length: 500 })
  description: string;

  // 1:1 relation with user
  @OneToOne(type => UserEntity, user => user.books)
  user: UserEntity;

  // 1:1 relation with offer
  @OneToOne(type => OfferEntity, offer => offer.judgment)
  offer: OfferEntity;
}
