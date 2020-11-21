import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UserDaoService } from 'src/app/services/user/user-dao.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {

  private userData: any = {};
  private rolesArray: Array<any> =[];

  Roles = [
    {role:"admin", id:1},
    {role:"user", id: 2}
  ];
  
  constructor(
    private userDao: UserDaoService,
    private router: Router,
    public toastController: ToastController,
  ) {}

  doRoles(roles:string, isChecked:boolean){
    if(isChecked){
      this.rolesArray.push(roles);
    } else {
      let index = this.rolesArray.indexOf(roles);
      this.rolesArray.splice(index,1)
    }
    
  }

  duplicate(){
    console.log(this.rolesArray)
  }

  doConfirm(): void {
    this.userData["role"] = this.rolesArray;
    console.log(this.userData["role"])
    const user: User = User.parse(this.userData);
    this.userDao.save(user).subscribe((users) => {
      this.presentToast("User created successfully")
      this.router.navigate(['login']);
    })
    
  }

  doClear(): void {
    this.userData = {};
  }

  private async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }
  ngOnInit() {
  }

}
