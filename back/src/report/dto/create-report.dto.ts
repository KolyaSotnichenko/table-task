import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateReportDto {
  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  numberOfHdd: string;

  @ApiProperty()
  @IsString()
  fullNameTransmitted: string;

  @ApiProperty()
  @IsString()
  fullNameReceived: string;

  @ApiProperty()
  @IsString()
  numberOfDestroyAct: string;

  @ApiProperty()
  @IsString()
  notes: string;
}
