
export const mappersStatusWorker = (res: {}) => {
  const { workEntryIn, workEntryOut } = res.data.data[1]
  const { firstName, lastName, id, workStatus } = res.data.data[0].employee
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
