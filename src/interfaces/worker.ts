export interface Worker {
    id: string;
    firstName: string;
    lastName: string;
    workStatus: string;
}
export interface TimeWorker {
  hours: number | null,
  minutes: number | null,
  seconds: number | null
}
