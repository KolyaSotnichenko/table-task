import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReportModel extends Base {}

export class ReportModel extends TimeStamps {
  @prop()
  date: string;
  @prop({ unique: true })
  numberOfHdd: string;
  @prop()
  fullNameTransmitted: string;
  @prop()
  fullNameReceived: string;
  @prop()
  numberOfDestroyAct: string;
  @prop()
  notes: string;
}
