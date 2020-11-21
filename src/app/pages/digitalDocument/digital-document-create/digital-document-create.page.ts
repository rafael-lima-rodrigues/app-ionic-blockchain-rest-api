import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DigitalDocument } from 'src/app/models/digital-document';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { DigitalDocumentDaoService } from 'src/app/services/digitalDocument/digital-document-dao.service';

@Component({
  selector: 'app-digital-document-create',
  templateUrl: './digital-document-create.page.html',
  styleUrls: ['./digital-document-create.page.scss'],
})
export class DigitalDocumentCreatePage implements OnInit {
 
  private data: any = {};

  constructor(
    private digitalDocumentDao: DigitalDocumentDaoService,
    private router: Router,
    public toastController: ToastController,
    private authRequest: AuthServiceService,


  ) { }

  doConfirmar(): void {
    //console.log(this.data);
    const digitalDocument = DigitalDocument.parse(this.data)
    this.authRequest.getUser().then((user) => {
      digitalDocument.userIdOwner = user;
      //digitalDocument.signature.set(user, true);
     // console.log("doc signed: "+ digitalDocument.toString)
    })
    digitalDocument.toString();

    this.digitalDocumentDao.save(digitalDocument).subscribe((digitalDocuments) =>{
      this.presentToast("Documento salvo com sucesso");
      this.doLimpar()
      this.doFinalizar()
    });
  }

  private async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

  doLimpar(): void {
    this.data = {};
  }

  doFinalizar(): void {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
