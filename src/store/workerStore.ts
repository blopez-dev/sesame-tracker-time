 import {defineStore } from 'pinia'
 import { calculateDifferenteBetweenTwoDates, formatTime } from '@/utils/dates'
 import { Worker, TimeWorker } from '@/interfaces/worker'

 interface WorkerState {
  worker: Worker;
  timeWorker: TimeWorker,
  timeWorkerWithFormat: string
 }
export const useGetInfoWorker = defineStore('workerStore', {
  state: (): WorkerState => ({
    worker: {
      firstName: null,
      lastName: null,
      id: null,
      workStatus: null,
    },
    timeWorker: {
      hours: null,
      minutes: null,
      seconds: null
    },
    timerWithFormat: '',
  }),
  actions: {
    loadWorker({ employee, workEntryIn, workEntryOut } ) {
      this.worker = employee;
      this.workEntryIn = workEntryIn;
      this.workEntryOut = workEntryOut;
      const timeWorker = calculateDifferenteBetweenTwoDates(new Date(workEntryIn?.date), new Date(workEntryOut?.date))
      const formattedTime = formatTime(timeWorker)
      this.timerWithFormat = formattedTime

    },
    // setTimeWorkerWithFormat({ workEntryIn, workEntryOut }) {
    //   this.timerWithFormat = calculateDifferenteBetweenTwoDates(new Date(workEntryIn?.date), new Date(workEntryOut?.date))
    // },
    }
})
