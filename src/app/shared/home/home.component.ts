import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Teacher } from 'src/app/models/teacher';
import { StudentService } from 'src/app/sharedService/student.service';
import { TeacherService } from 'src/app/sharedService/teacher.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {
  object2 = new Student;
  object = new Teacher;
  allData: [];
  allData2: [];

  constructor(@Inject(TeacherService) public service: TeacherService, public serv: TeacherService
    , @Inject(StudentService) public service2: StudentService, public servi: StudentService) {


    this.serv.getTeacher().subscribe((data: any) => {
      this.allData = data;
    })
    this.servi.getStudent().subscribe((data: any) => {
      this.allData2 = data;
    })
  }

  save() {
    this.serv.post(this.object).subscribe(data => {
      window.location.reload();
    })

    this.servi.post(this.object2).subscribe(data => {
      window.location.reload();
    })
  }


  update() {
    this.serv.put(this.object, 1);
    this.servi.put(this.object2, 1);

  }

  remove(id: any) {
    this.serv.delete(id).subscribe(data => {
      window.location.reload();
    })
    this.servi.delete(id).subscribe(data => {
      window.location.reload();
    })
  }

  print(user: any) {
    console.log(user);
  }


ngOnInit(): any {
}

}