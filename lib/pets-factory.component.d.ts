import { OnInit } from '@angular/core';
import { PetsFactoryService } from './pets-factory.service';
import { IPet } from './models/pet.model';
export declare class PetsFactoryComponent implements OnInit {
    private petsFactoryService;
    name: string;
    status: string;
    pet: IPet;
    constructor(petsFactoryService: PetsFactoryService);
    ngOnInit(): void;
    addNewPet(): void;
}
