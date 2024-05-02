import { defineComponent } from 'vue'
import { getInitialWorkerState } from '@/composables/useGetStatusWorker'
export default defineComponent({
  name: 'HomeView',
  setup() {
    const {
      worker,
      timeWorker,
      timeWorkerWithFormat,
      getInitialWorkerState
    } = useWorker()

    getInitialWorkerState()

    return {
      worker,
    }
  },
})
