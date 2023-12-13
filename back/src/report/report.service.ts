import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { InjectModel } from 'nestjs-typegoose';
import { ReportModel } from './report.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(ReportModel)
    private readonly ReportModel: ModelType<ReportModel>,
  ) {}

  create(dto: CreateReportDto) {
    const newReport = new this.ReportModel(dto);

    return newReport.save();
  }

  findAll(searchTerm?: string) {
    let options = {};

    if (searchTerm) {
      options = {
        $or: [
          {
            numberOfHDD: new RegExp(searchTerm, 'i'),
          },
        ],
      };
    }

    return this.ReportModel.find(options)
      .select('-updatedAt -__v')
      .sort({
        createdAt: 'desc',
      })
      .exec();
  }

  remove(id: number) {
    return this.ReportModel.findByIdAndDelete(id).exec();
  }
}
