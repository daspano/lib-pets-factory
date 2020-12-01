import { IPet } from './models/pet.model';
export declare class PetsFactoryService {
    private apiUrl;
    constructor();
    addPet(pet: IPet): Promise<IPet>;
}
