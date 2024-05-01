
export const mappersStatusWorker = (res: {}) => {
  const lastStatus = res.data[0];
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
