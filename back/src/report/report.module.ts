import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReportModel } from './report.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReportModel,
        schemaOptions: {
          collection: 'Report',
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
