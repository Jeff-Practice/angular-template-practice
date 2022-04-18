import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-role-template',
  templateUrl: './role-template.component.html',
  styleUrls: ['./role-template.component.scss']
})
export class RoleTemplateComponent implements OnInit {
  @ViewChild('Teacher') TeacherTemplate!: TemplateRef<any>;
  @ViewChild('Student') StudentTemplate!: TemplateRef<any>;
  role?: "Teacher"| "Student" | undefined;
  accountForm!: FormGroup;

  constructor(
    private _fb: FormBuilder
    ) { }

  get getRole(): string | undefined{
    return this.accountForm.value.role;
  }

  get getTemplate(): TemplateRef<any>{
    if(this.getRole=== "Teacher"){
      return this.TeacherTemplate;
    }
    else {
      return this.StudentTemplate;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    console.log(this.TeacherTemplate);
  }

  initForm(): void {
    this.accountForm = this._fb.group({
      name: null,
      role: null,
      age: null,
      major: null,
      class: null,
      TeacherCertification: null
    });
  }

  changeRoleToTeacher(): void {
    this.accountForm.get('role')?.setValue('Teacher');
  }

  changeRoleToStudent(): void {
    this.accountForm.get('role')?.setValue('Student');
  }
}
