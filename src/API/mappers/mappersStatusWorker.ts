import type {WorkerResponse} from "@/interfaces/worker";

export const mappersStatusWorker = (res: {data:[], meta:{}}):WorkerResponse => {
  const lastStatus = res.data[0];
  console.log(lastStatus)
  const { workEntryIn, workEntryOut } = lastStatus
  const { firstName, lastName, id, workStatus } = lastStatus.employee
  return {
    workEntryIn,
    workEntryOut,
    employee: {
      firstName,
      lastName,
      id,
      workStatus
    }
  }
}
