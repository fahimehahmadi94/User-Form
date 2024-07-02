export interface PersonalInfo {
  firstName: string;
  lastName: string;
  nationalCode: string;
}

export interface ContactInfo {
  province: string;
  city: string;
  address: string;
}

export interface User {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  document: File | null;
}

export const InitialUser: User = {
  personalInfo: {
    firstName: '',
    lastName: '',
    nationalCode: ''
  },
  contactInfo: {
    province: '',
    city: '',
    address: ''
  },
  document: null
}
