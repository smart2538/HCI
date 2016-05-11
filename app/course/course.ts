export interface Course {
  id: number;
  name: {
    en: string;
    th: string;
  };
  credit: {
    self?: number;
    lab?: number;
    total?: number;
    lecture?: number;
  };
  prereq: any[];
  description: {
    en: string;
    th: string;
  };
  section?: any[];

}
