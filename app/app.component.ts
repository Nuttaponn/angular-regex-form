import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  digitForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  emailsMatchValidator(form: FormGroup) {
    return;
  }

  ngOnInit() {
    this.digitForm = this.formBuilder.group({
      digitOnly: ["", [Validators.pattern("[0-9]+")]]
    });
  }

  onSubmit() {
    console.log(this.digitForm.valid);
  }
}
