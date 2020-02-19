import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceMSE } from '../services/service-mse';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayHouse:any = []
  arrayMembers:any = []
  infoMembers:any = []
  rows:any = []
  columns = [
    { name: 'name' },
  ]
  optionSelected: string  = '0';
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(private serviceHttp: ServiceMSE, private activateRouter: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.Information()
  }

  /**
   * Guarda la informacion de todas las casas
   */
  Information(){
    this.serviceHttp.GetHouse('houses/').subscribe(data => {
      //console.log('data ', data);
      this.arrayHouse = data
      this.arrayHouse.unshift({
        _id: "",
        name: "seleccione",
        mascot: "",
        headOfHouse: "l",
        houseGhost: "",
        founder: "",
        __v: 0,
        school: "",
        members: [],
        values:  [],
        colors: []
      })
      this.arrayHouse.forEach(house => {
        console.log('cada uno  ', house);
        //this.InfoMembers(house)

      });
    })
  }


  /**
   * Funcion que selecciona una casa y permite ver el listado de miembros
   * @param event El evento del select el cual permite obtener la casa seleccionada
   */
  SelectHouse(event){
    
    let membersId: string = event.target.value
    let arrayMembersId = membersId.split(',')
    console.log('array ', arrayMembersId)
    console.log('miembros tamaño ', arrayMembersId.length)
    this.router.navigate(['list-members', membersId])
 
    /**
          for (let index = 0; index < arrayMembersId.length; index++) {
      const element = arrayMembersId[index];
      
        this.serviceHttp.GetMembers('characters/', element).subscribe(data => {
          console.log('miembro ', data)
          if(data['0'].name !== undefined || data[0].length > 0 || Object.keys(data).length >= 0 ){
            this.infoMembers.push(data['0'])
          }else{
            console.log('nada')
          }
          
        }, error => {
          console.log('error ', error)
        }, () => {
          
        })
    }
     */
     
  
  }

}
