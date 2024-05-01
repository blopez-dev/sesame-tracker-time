export interface Worker {
    id: string;
    firstName: string;
    lastName: string;
    workStatus: 'online' | 'offline';
}
export interface TimeWorker {
  hours: number | null,
  minutes: number | null,
  seconds: number | null
}
