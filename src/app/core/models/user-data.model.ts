export interface PersonalInfo {
  firstName: string;
  lastName: string;
  nationalCode: string;
}

export interface DocumentData {
  file: File;
  previewUrl: string | ArrayBuffer | null;
}

export interface ContactInfo {
  province: string;
  city: string;
  address: string;
}
