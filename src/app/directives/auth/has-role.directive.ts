import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

const jwtHelper = new JwtHelperService();

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit{
  @Input('appHasRole') role: string;

  constructor(
    private authRequest: AuthServiceService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }


  ngOnInit(): void {
    this.authRequest.getUserTokenSubject().subscribe((token) => {
      console.log('Directive "appHasRole"');
      console.log(this.role);

      this.viewContainer.clear();

      if (!this.role) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        console.log(`Token: ${token}`);
        
        const jwtDecoded = jwtHelper.decodeToken(token);

        console.log(`JWT Decoded: ${JSON.stringify(jwtDecoded)}`);

        if (jwtDecoded && jwtDecoded.extras && jwtDecoded.extras.role === this.role) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    });
  }

}
