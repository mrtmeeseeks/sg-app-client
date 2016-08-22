import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../user.service";

@Component({
    selector: 'login',
    encapsulation: ViewEncapsulation.None,
    directives: [],
    template: require('./login.html'),
})
export class Login implements OnInit{

    public form:FormGroup;
    public email:AbstractControl;
    public password:AbstractControl;
    public submitted:boolean = false;

    constructor(fb:FormBuilder,  private _userService: UserService, private _router: Router) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    ngOnInit() {
        if(this._userService.isLoggedIn()) {
            this._router.navigate(['admin/dashboard/professors']);
        }
    }

    public onSubmit(values):void {
        this.submitted = true;

        if (this.form.valid) {
            this._userService.login(values.email, values.password).then((result) => {
                this._router.navigate(['admin/dashboard/professors']);
            }, (error) => {
                //todo handle login failure
            });
        }
    }
}
