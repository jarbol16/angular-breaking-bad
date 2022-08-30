import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/Character';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  personajes: Character[] | undefined;
  personajesCopy!: Character[];

  constructor(private apiService: ApiService)
   {
    this.getData();
   }

  filter(e: any) {
    const search: string = e.target.value;
    console.log({search});
    this.personajes = this.personajesCopy.filter(({name}: Character) => {
      return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
  }

  getData() {
    this.apiService.invocarApi("characters").subscribe((res: Character[]) => {
      console.table(res);
      this.personajes = res;
      this.personajesCopy = this.personajes;
    })
  }

  ngOnInit(): void {
  }

}
