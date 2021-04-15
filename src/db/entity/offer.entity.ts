import {
  Entity, PrimaryGeneratedColumn, Column,
  BaseEntity, ManyToOne, OneToOne
} from 'typeorm';
import UserEntity from './user.entity';
import ProjectEntity from './project.entity';
import JudgmentEntity from './judgment.entity';
 

@Entity()
export default class OfferEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 500 })
  description: string;

  // n:1 relation with user
  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity;

  // n:1 relation with project
  @ManyToOne(type => ProjectEntity, project => project.offers)
  project: ProjectEntity;

  // 1:1 relation with judgment
  @OneToOne(type => JudgmentEntity, judgment => judgment.offer)
  judgment: JudgmentEntity;
}
