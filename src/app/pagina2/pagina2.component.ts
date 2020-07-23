import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) {


   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params["id"]!=null){
        console.log("Llegada de parametro Id "+params["id"]);
      }
    })
  }

}
