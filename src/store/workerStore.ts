 import {defineStore } from 'pinia'
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
      workStatus: null
    },
    timeWorker: {
      hours: null,
      minutes: null,
      seconds: null
    },
    timeWorkerWithFormat: ''
  }),

  actions: {
    loadWorker( worker ) {
      this.worker = worker;
    },

    }
})
