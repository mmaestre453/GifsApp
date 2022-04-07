import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  historiaServicio: string[]=[];
  constructor(private gifsService:GifsService) {
    console.log(this.gifsService.historial);
   }
  
  get historial(){
    return this.gifsService.historial;
  }

  buscarResultado(item: string){
    this.gifsService.buscarGifs(item);
  }
  

}
