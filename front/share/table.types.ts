export type BasicData = {
  id: string;
  date: string;
  numberOfHdd: string;
  fullNameTransmitted: string;
  fullNameReceived: string;
  numberOfDestroyAct: string;
  notes: string;
};

export interface ICreateReport {
  date: string;
  numberOfHdd: string;
  fullNameTransmitted: string;
  fullNameReceived: string;
  numberOfDestroyAct: string;
  notes: string;
}
