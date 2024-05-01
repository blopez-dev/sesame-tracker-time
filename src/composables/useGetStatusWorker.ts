import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useGetInfoWorker } from '@/store/workerStore';

export const useWorker = () => {
  const workerStore = useGetInfoWorker();
  const { worker, timeWorker, timeWorkerWithFormat } = storeToRefs(workerStore);

  const getInitialWorkerState = async () => {
    await workerStore.loadWorker(await getWorkerInfo());
  }

}
