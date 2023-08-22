import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Goal } from '../entities/goal.entity';
import { CreateGoalDto } from '../dto/create-goal.dto';

@Injectable()
export class GoalsRepository extends Repository<Goal> {
  constructor(private readonly dataSource: DataSource) {
    super(Goal, dataSource.createEntityManager());
  }

  async createGoal(Goal: CreateGoalDto): Promise<Goal> {
    const newGoal = await this.create(Goal);
    return await this.save(newGoal);
  }
}
