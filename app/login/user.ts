import { Course } from '../course/course';

export class User{
  constructor(
    public id: string,
		public name: string,
		public courses: Array<Course>){

  }
}
