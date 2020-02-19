import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceMSE } from '../services/service-mse';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  constructor(private serviceHttp: ServiceMSE, private route: ActivatedRoute) {
    
   }
  url: string = ''
  nameSearch:string = ''
  membersId:string = '';
  arrayMembersId: any = []
  infoMembers:any =[]
  rows:any = []
  columns = [
    { name: 'name' },
  ]
  rest: any;
  temp: any = [];
  ngOnInit() {

    this.ReceibeParams();
    this.ViewFlag();
  }

  ngOnChanges(){
    this.ReceibeParams()
    this.ViewFlag();
  }

  /**
   * Recibe los miembros de la casa seleccionada
   */
  ReceibeParams(){
    this.route.params.subscribe(data => {
      console.log('data recibido: ',data)
      
      //console.log('data recibido: ', this.arrayMembersId)
      this.membersId = data['house'].split(',');
      //console.log('miembros ', this.arrayMembersId.length)
      
       setTimeout(() => {
        for (let index = 0; index < this.membersId.length; index++) {
          const element = this.membersId[index];
          
           this.serviceHttp.GetMembers('characters/', element).subscribe(data => {
            
            if(data['0'].name !== undefined ){
              this.infoMembers.push(data['0'])
              this.ViewFlag()
            }
    
          }, error => {
            console.log('error ', error)
          })

        }
       }, 1500);
       
     
    })
  }

  /**
   Obtiene la bandera de la casa de acuerdo a la que se selecciono
   */
  ViewFlag(){
    console.log('casa seleccionada ', this.infoMembers['0'].house)
    switch (this.infoMembers['0'].house) {
      case 'Gryffindor':
        this.url = '/../assets/img/grifindor.png'
        break;

      case 'Ravenclaw':
        this.url = '/../assets/img/ravenclaw.png'
        break;

      case 'Slytherin':
        this.url = '/../assets/img/slytherin.png'
        break;

      case 'Hufflepuff':
        this.url = '/../assets/img/hufflepuff.png'
        break;
  
    }
  }
 

}
