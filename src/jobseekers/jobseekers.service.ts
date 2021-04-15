import UserEntity from '../db/entity/user.entity';
import ProjectEntity from '../db/entity/project.entity';
import OfferEntity from '../db/entity/offer.entity';
import JudgmentEntity from '../db/entity/judgment.entity';
import ProjectDto from './dto/project.dto';
import OfferDto from './dto/offer.dto';
import JudgmentDto from './dto/judgment.dto';

export class JobseekersService {
  // --- inserts
  async insertProject(projectDetails: ProjectDto): Promise<ProjectEntity> {
    const { user, name, description, offers } = projectDetails;
    const project = new ProjectEntity();
    project.name = name;
    project.description = description;
    project.user = await UserEntity.findOne(user);
    project.offers=[];
    for ( let i = 0; i < offers.length ; i++)
    {
      const offer = await OfferEntity.findOne(offers[i]);
      project.offers.push(offer);
    }
    await project.save();
    return project;
  }

  async insertOffer(offerDetails: OfferDto): Promise<OfferEntity> {
    const { description, user, project, judgment } = offerDetails;
    const offer = new OfferEntity();
    offer.description = description;
    offer.user = await UserEntity.findOne(user);
    offer.project = await ProjectEntity.findOne(project);
    offer.judgment = await JudgmentEntity.findOne(judgment);
    await offer.save();
    return offer;
  }

  async insertJudgment(judgmentDetails: JudgmentDto): Promise<JudgmentEntity> {
    const { title, description, user, offer } = judgmentDetails;
    const judgment = new JudgmentEntity();
    judgment.title = title;
    judgment.description = description;
    judgment.user = await UserEntity.findOne(user);
    judgment.offer = await OfferEntity.findOne(offer);
    await judgment.save();
    return judgment;
  }


  // --- gets
  async getAllProjects(): Promise<ProjectEntity[]> {
    return ProjectEntity.find();
  }
  
  async getAllOffers(): Promise<OfferEntity[]> {
    return OfferEntity.find();
  }

  async getAllJudgments(): Promise<JudgmentEntity[]> {
    return JudgmentEntity.find();
  }


  // --- deletes
  async deleteProject(id: number): Promise<ProjectEntity> {
    const project = await ProjectEntity.findOne(id);
    await project.remove();
    return project;
  }

  async deleteOffer(id: number): Promise<OfferEntity> {
    const offer = await OfferEntity.findOne(id);
    await offer.remove();
    return offer;
  }

  async deleteJudgment(id: number): Promise<JudgmentEntity> {
    const judgment = await JudgmentEntity.findOne(id);
    await judgment.remove();
    return judgment;
  }

  // --- updates
  async updateProject(id: number, projectDetails: ProjectDto): Promise<ProjectEntity> {
    const { name, description, user, offers } = projectDetails;
    const project = await ProjectEntity.findOne(id);

    if (name) {
      project.name = name;
    }
    if (description) {
      project.description = description;
    }
    if (user) {
      project.user = await UserEntity.findOne(user);
    }
    if (offers) {
      project.offers=[];
      for ( let i = 0; i < offers.length ; i++)
      {
        const offer = await OfferEntity.findOne(offers[i]);
        project.offers.push(offer);
      }
    }
    await project.save();
    return project;
  }

  async updateOffer(id: number, offerDetails: OfferDto): Promise<OfferEntity> {
    const { description, user, project, judgment } = offerDetails;
    const offer = await OfferEntity.findOne(id);
    if (description) {
      offer.description = description;
    }
    if (user) {
      offer.user = await UserEntity.findOne(user);
    }
    if (project) {
      offer.project = await ProjectEntity.findOne(project);
    }
    if (judgment) {
      offer.judgment = await JudgmentEntity.findOne(judgment);
    }
    offer.save()
    return offer;
  }

  async updateJudgment(id: number, judgmentDetails: JudgmentDto): Promise<JudgmentEntity> {
    const { title, description, user, offer } = judgmentDetails;
    const judgment = await JudgmentEntity.findOne(id);
    if (title) {
      judgment.title = title;
    }
    if (description) {
      judgment.description = description;
    }
    if (user) {
      judgment.user = await UserEntity.findOne(user);
    }
    if (offer) {
      judgment.offer = await OfferEntity.findOne(offer);
    }
    judgment.save()
    return judgment;
  }
}
