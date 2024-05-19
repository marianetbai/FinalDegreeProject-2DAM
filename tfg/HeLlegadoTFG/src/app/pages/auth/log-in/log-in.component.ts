import { Component, Inject, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LoginComponent{

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  constructor(@Inject(Router) private router: Router) { }

 async submit(){
    if(this.form.value){
      const loading = await this.utilSvc.loading();
      await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        this.getUserInfo(res.user.uid);

      }).catch(error => {
        console.log(error);

        this.utilSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
  }

  goToSignUp() {
    this.router.navigate(['/auth','sign-up']);
  }

  goToForgotPassword() {
    this.router.navigate(['/auth','forgot-password']);
    }

    async getUserInfo(id: string){
      if(this.form.value){
        const loading = await this.utilSvc.loading();
        await loading.present();

        let path = `users/${id}`;

        this.firebaseSvc.getDocument(path).then((user: User) => {

          this.utilSvc.saveInLocalStorage('user', user);
          this.utilSvc.routerLink('/home');
          this.form.reset();

          this.utilSvc.presentToast({
            message: `Te damos la bienvenida ${user.name}`,
            duration: 1500,
            color: 'primary',
            position: 'middle',
            icon: 'person-circle-outline'
          })

        }).catch(error => {
          console.log(error);
          this.utilSvc.presentToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            position: 'middle',
            icon: 'alert-circle-outline'
          })
        }).finally(() => {
          loading.dismiss();
        })
      }
    }
}
