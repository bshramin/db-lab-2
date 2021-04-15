import { Module } from '@nestjs/common';
import JobseekersController from './jobseekers.controller';
import { JobseekersService } from './jobseekers.service';

@Module({
  imports: [],
  controllers: [JobseekersController],
  providers: [JobseekersService]
})
export default class JobseekersModule {}
