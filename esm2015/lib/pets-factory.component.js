import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PetsFactoryService } from './pets-factory.service';
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
export { PetsFactoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1mYWN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BldHMtZmFjdG9yeS8iLCJzb3VyY2VzIjpbImxpYi9wZXRzLWZhY3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQU0vQixZQUNVLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRTlDLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDVCxFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDckMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQzthQUNuRCxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGLENBQUE7O1lBcEIrQixrQkFBa0I7O0FBTHZDO0lBQVIsS0FBSyxFQUFFO2tEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7b0RBQWdCO0FBSGIsb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1csb0JBQW9CLENBMkJoQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBldHNGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vcGV0cy1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSVBldCB9IGZyb20gJy4vbW9kZWxzL3BldC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wZXRzLWZhY3RvcnknLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgUGV0c0ZhY3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XG4gIHB1YmxpYyBwZXQ6IElQZXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwZXRzRmFjdG9yeVNlcnZpY2U6IFBldHNGYWN0b3J5U2VydmljZVxuICApIHtcbiAgICB0aGlzLnBldCA9IHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAgbmFtZTogJycsXG4gICAgICBzdGF0dXM6ICcnXG4gICAgfTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZE5ld1BldCgpO1xuICB9XG5cbiAgYWRkTmV3UGV0KCl7XG4gICAgdGhpcy5wZXQuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnBldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgIHRoaXMucGV0LnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgIHRoaXMucGV0c0ZhY3RvcnlTZXJ2aWNlLmFkZFBldCh0aGlzLnBldClcbiAgICAgIC50aGVuKChvaykgPT4gYWxlcnQoJ05ldyBQZXQgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEnKSlcbiAgICAgIC5jYXRjaCgoa28pID0+IGFsZXJ0KCdFcnJvciBBZGRpbmcgTmV3IFBldCEhJykpO1xuICB9XG59XG4iXX0=