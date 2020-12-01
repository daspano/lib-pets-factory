import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var PetsFactoryService = /** @class */ (function () {
    function PetsFactoryService() {
        this.apiUrl = 'https://petstore.swagger.io/v2/';
    }
    PetsFactoryService.prototype.addPet = function (pet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(_this.apiUrl + 'pet', {
                method: 'POST',
                body: JSON.stringify(pet),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                resolve(pet);
            })
                .catch(function (error) {
                reject('error');
            });
        });
    };
    PetsFactoryService.ɵprov = ɵɵdefineInjectable({ factory: function PetsFactoryService_Factory() { return new PetsFactoryService(); }, token: PetsFactoryService, providedIn: "root" });
    PetsFactoryService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PetsFactoryService);
    return PetsFactoryService;
}());

var PetsFactoryComponent = /** @class */ (function () {
    function PetsFactoryComponent(petsFactoryService) {
        this.petsFactoryService = petsFactoryService;
        this.pet = {
            id: null,
            name: '',
            status: ''
        };
    }
    PetsFactoryComponent.prototype.ngOnInit = function () {
        this.addNewPet();
    };
    PetsFactoryComponent.prototype.addNewPet = function () {
        this.pet.id = new Date().getTime();
        this.pet.name = this.name;
        this.pet.status = this.status;
        this.petsFactoryService.addPet(this.pet)
            .then(function (ok) { return alert('New Pet Added Successfully!!'); })
            .catch(function (ko) { return alert('Error Adding New Pet!!'); });
    };
    PetsFactoryComponent.ctorParameters = function () { return [
        { type: PetsFactoryService }
    ]; };
    __decorate([
        Input()
    ], PetsFactoryComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], PetsFactoryComponent.prototype, "status", void 0);
    PetsFactoryComponent = __decorate([
        Component({
            selector: 'lib-pets-factory',
            template: ""
        })
    ], PetsFactoryComponent);
    return PetsFactoryComponent;
}());

var PetsFactoryModule = /** @class */ (function () {
    function PetsFactoryModule() {
    }
    PetsFactoryModule = __decorate([
        NgModule({
            declarations: [PetsFactoryComponent],
            imports: [
                CommonModule
            ],
            exports: [PetsFactoryComponent]
        })
    ], PetsFactoryModule);
    return PetsFactoryModule;
}());

/*
 * Public API Surface of pets-factory
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetsFactoryComponent, PetsFactoryModule, PetsFactoryService };
//# sourceMappingURL=pets-factory.js.map
