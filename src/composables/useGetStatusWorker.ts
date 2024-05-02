import { storeToRefs } from 'pinia';
import { useGetInfoWorker } from '@/store/workerStore';
import {getCurrentWorkerStatus, clockIn, clockOut} from '@/helpers/getWokerInfo'

export const useWorker = () => {
  const workerStore = useGetInfoWorker();
  const workerInfoData = workerStore.worker;

  const {
    worker,
    timerWithFormat,
    timeWorker,
  } = storeToRefs(workerStore);

  const getInitialWorkerState = async () => {
     workerStore.loadWorker(await getCurrentWorkerStatus());
  }

  const clockInWorker = async () => {
    const { id } = workerInfoData;
    await clockIn({employeeId: id, workEntryIn: { coordinates: {  latitude: 39.4697500, longitude: -0.3773900 }}})
    await getInitialWorkerState()
  }
  const clockOutWorker = async () => {
    const { id } = workerInfoData;
    await clockOut({employeeId: id, workEntryOut: { coordinates: {  latitude: 39.4697500, longitude: -0.3773900 }}})
    await getInitialWorkerState()
  }
  const clockPause = () => {
      clearInterval(this.intervalId)
  }

  return {
    worker,
    timeWorker,
    timerWithFormat,
    getInitialWorkerState,
    clockInWorker,
    clockOutWorker,
    clockPause
  }
}
