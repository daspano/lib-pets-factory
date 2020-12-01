import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let PetsFactoryService = class PetsFactoryService {
    constructor() {
        this.apiUrl = 'https://petstore.swagger.io/v2/';
    }
    addPet(pet) {
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl + 'pet', {
                method: 'POST',
                body: JSON.stringify(pet),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                resolve(pet);
            })
                .catch((error) => {
                reject('error');
            });
        });
    }
};
PetsFactoryService.ɵprov = ɵɵdefineInjectable({ factory: function PetsFactoryService_Factory() { return new PetsFactoryService(); }, token: PetsFactoryService, providedIn: "root" });
PetsFactoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PetsFactoryService);

let PetsFactoryComponent = class PetsFactoryComponent {
    constructor(petsFactoryService) {
        this.petsFactoryService = petsFactoryService;
        this.pet = {
            id: null,
            name: '',
            status: ''
        };
    }
    ngOnInit() {
        this.addNewPet();
    }
    addNewPet() {
        this.pet.id = new Date().getTime();
        this.pet.name = this.name;
        this.pet.status = this.status;
        this.petsFactoryService.addPet(this.pet)
            .then((ok) => alert('New Pet Added Successfully!!'))
            .catch((ko) => alert('Error Adding New Pet!!'));
    }
};
PetsFactoryComponent.ctorParameters = () => [
    { type: PetsFactoryService }
];
__decorate([
    Input()
], PetsFactoryComponent.prototype, "name", void 0);
__decorate([
    Input()
], PetsFactoryComponent.prototype, "status", void 0);
PetsFactoryComponent = __decorate([
    Component({
        selector: 'lib-pets-factory',
        template: ``
    })
], PetsFactoryComponent);

let PetsFactoryModule = class PetsFactoryModule {
};
PetsFactoryModule = __decorate([
    NgModule({
        declarations: [PetsFactoryComponent],
        imports: [
            CommonModule
        ],
        exports: [PetsFactoryComponent]
    })
], PetsFactoryModule);

/*
 * Public API Surface of pets-factory
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetsFactoryComponent, PetsFactoryModule, PetsFactoryService };
//# sourceMappingURL=pets-factory.js.map
