import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigitalDocument } from 'src/app/models/digital-document';
import { DigitalDocumentDaoService } from 'src/app/services/digitalDocument/digital-document-dao.service';
import { ToastController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Component({
  selector: 'app-digital-document-list',
  templateUrl: './digital-document-list.page.html',
  styleUrls: ['./digital-document-list.page.scss'],
})
export class DigitalDocumentListPage implements OnInit {

  private data: any;
  private digitalDocuments: DigitalDocument[] = [];


  constructor(
    private digitalDocumentDao: DigitalDocumentDaoService,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private authRequest: AuthServiceService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.data = params;
    });
  }

  ngOnInit() {
    console.log(this.data);
    this.doCarregar();
  }

  doCarregar(): void {
    this.digitalDocumentDao.findAll().subscribe((digitalDocuments) => {
      this.digitalDocuments = digitalDocuments;
      console.log('preenchimentos docs', digitalDocuments)
    });
  }
  doRemover(digitalDocument: DigitalDocument): void {
    this.digitalDocumentDao.delete(digitalDocument).subscribe((digitalDocuments) => {
      this.digitalDocuments = digitalDocuments;
      this.presentToast("Documento removido com sucesso");
      this.doCarregar();
    });
  }

  doAssinar(digitalDocument: DigitalDocument): void {
    this.authRequest.getUser().then((user) => {
      console.log('doAssinar', user);
      digitalDocument.signature[user] = true;      
      console.log("UPDATE =" + JSON.stringify(digitalDocument));
      this.digitalDocumentDao.update(digitalDocument).subscribe((any) => {
      })
    }).finally(() =>{
      this.presentToast("Documento assinado");
      this.doCarregar();
    })

  }


  private async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

}
