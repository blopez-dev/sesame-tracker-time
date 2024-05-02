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
export interface WorkerResponse {
  id:              string;
  employee:        Employee;
  workEntryType:   string;
  workEntryIn:     WorkEntryIn;
  workEntryOut:    null;
  workedSeconds:   number;
  workCheckTypeId: null;
  workBreakId:     null;
  createdAt:       Date;
  updatedAt:       Date;
  deletedAt:       null;
}

export interface Employee {
  id:                              string;
  firstName:                       string;
  lastName:                        string;
  email:                           string;
  workStatus:                      string;
  imageProfileURL:                 null;
  code:                            number;
  pin:                             number;
  phone:                           null;
  company:                         Company;
  gender:                          null;
  contractId:                      null;
  nid:                             string;
  identityNumberType:              string;
  ssn:                             null;
  pricePerHour:                    number;
  accountNumber:                   null;
  dateOfBirth:                     null;
  customFields:                    any[];
  createdAt:                       Date;
  updatedAt:                       Date;
  status:                          string;
  children:                        null;
  disability:                      null;
  address:                         null;
  postalCode:                      null;
  city:                            null;
  province:                        null;
  country:                         null;
  nationality:                     null;
  personalMail:                    null;
  maritalStatus:                   null;
  emergencyPhone:                  null;
  description:                     null;
  salaryRange:                     null;
  studyLevel:                      null;
  professionalCategoryCode:        null;
  professionalCategoryDescription: null;
  bic:                             null;
}

export interface Company {
  id:                string;
  name:              string;
  language:          string;
  notificationEmail: string;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface WorkEntryIn {
  origin:      string;
  date:        Date;
  coordinates: Coordinates;
  officeId:    null;
}

export interface Coordinates {
  latitude:  number;
  longitude: number;
}

