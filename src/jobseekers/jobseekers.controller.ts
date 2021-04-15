import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import UserEntity from '../db/entity/user.entity';
import ProjectEntity from '../db/entity/project.entity';
import OfferEntity from '../db/entity/offer.entity';
import JudgmentEntity from '../db/entity/offer.entity';
import ProjectDto from './dto/project.dto';
import OfferDto from './dto/offer.dto';
import JudgmentDto from './dto/judgment.dto';


@Controller('job')
export default class JobseekersController {
  constructor(private readonly jobseekersServices: JobseekersService) {}
  
  // --- insert
  @Post('project')
  postProject(@Body() project: ProjectDto) {
    return this.jobseekersServices.insertProject(project);
  }

  @Post('offer')
  postOffer(@Body() offer: OfferDto) {
    return this.jobseekersServices.insertOffer(offer);
  }

  @Post('judgment')
  postJudgment(@Body() judgment: JudgmentDto) {
    return this.jobseekersServices.insertJudgment(judgment);
  }


  // --- delete
  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Delete('project')
  deleteProject(@Query('id') id: number) {
    return this.jobseekersServices.deleteProject(id);
  }

  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Delete('offer')
  deleteOffer(@Query('id') id: number) {
    return this.jobseekersServices.deleteOffer(id);
  }

  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Delete('judgment')
  deleteJudgment(@Query('id') id: number) {
    return this.jobseekersServices.deleteJudgment(id);
  }

  
  // --- get
  @Get('project')
  getAllProjects() {
    return this.jobseekersServices.getAllProjects();
  }

  @Get('offers')
  getAllOffers() {
    return this.jobseekersServices.getAllOffers();
  }

  @Get('judgment')
  getAllJudgments() {
    return this.jobseekersServices.getAllJudgments();
  }

  // --- update
  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Put('project')
  putProject(@Query('id') id: number, @Body() project: ProjectDto) {
    return this.jobseekersServices.updateProject(id, project);
  }
  
  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Put('offer')
  putOffer(@Query('id') id: number, @Body() offer: OfferDto) {
    return this.jobseekersServices.updateOffer(id, offer);
  }

  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Put('judgment')
  putJudgment(@Query('id') id: number, @Body() judgment: JudgmentDto) {
    return this.jobseekersServices.updateJudgment(id, judgment);
  }
}