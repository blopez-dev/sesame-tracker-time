import http from '@/API/http/http'
import { mappersStatusWorker } from '@/API/mappers/mappersStatusWorker'

const getCurrentWorkerStatus = async() => {
  try {
    return http.get().then(res => {
      return mappersStatusWorker(res)
    })
  } catch (err) {
    console.log(err)
  }
}

const clockIn = (params) => {
  try {
    return http.post('/clock-in', params)
  } catch (err) {
    console.log(err)
  }
}

const clockOut = (params) => {
  try {
    return http.post('/clock-out', params)
  } catch (err) {
    console.log(err)
  }
}
export {
  getCurrentWorkerStatus,
  clockIn,
  clockOut
}
