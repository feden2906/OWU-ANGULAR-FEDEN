import {Component, OnInit} from '@angular/core';
import {GeneratorService} from "../../services";

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {
  randomString: any;

  constructor(private generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.generatorService.getNewString.subscribe(value => this.randomString = value);
  }

}
