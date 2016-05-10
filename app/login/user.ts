import { Course } from '../course/course';

export class User{
    public id: string;
    public isLogin: boolean;
		public courses: Array<Course>;
  constructor(){
      this.id = "";
      this.isLogin = false;
      this.courses = [];
  }
}
