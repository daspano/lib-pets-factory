import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PetsFactoryService } from './pets-factory.service';
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
export { PetsFactoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1mYWN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BldHMtZmFjdG9yeS8iLCJzb3VyY2VzIjpbImxpYi9wZXRzLWZhY3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RDtJQU1FLDhCQUNVLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRTlDLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDVCxFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUNELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDckMsSUFBSSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsS0FBSyxDQUFDLDhCQUE4QixDQUFDLEVBQXJDLENBQXFDLENBQUM7YUFDbkQsS0FBSyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFuQjZCLGtCQUFrQjs7SUFMdkM7UUFBUixLQUFLLEVBQUU7c0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTt3REFBZ0I7SUFIYixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxvQkFBb0IsQ0EyQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBldHNGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vcGV0cy1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSVBldCB9IGZyb20gJy4vbW9kZWxzL3BldC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wZXRzLWZhY3RvcnknLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgUGV0c0ZhY3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XG4gIHB1YmxpYyBwZXQ6IElQZXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwZXRzRmFjdG9yeVNlcnZpY2U6IFBldHNGYWN0b3J5U2VydmljZVxuICApIHtcbiAgICB0aGlzLnBldCA9IHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAgbmFtZTogJycsXG4gICAgICBzdGF0dXM6ICcnXG4gICAgfTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZE5ld1BldCgpO1xuICB9XG5cbiAgYWRkTmV3UGV0KCl7XG4gICAgdGhpcy5wZXQuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnBldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgIHRoaXMucGV0LnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgIHRoaXMucGV0c0ZhY3RvcnlTZXJ2aWNlLmFkZFBldCh0aGlzLnBldClcbiAgICAgIC50aGVuKChvaykgPT4gYWxlcnQoJ05ldyBQZXQgQWRkZWQgU3VjY2Vzc2Z1bGx5ISEnKSlcbiAgICAgIC5jYXRjaCgoa28pID0+IGFsZXJ0KCdFcnJvciBBZGRpbmcgTmV3IFBldCEhJykpO1xuICB9XG59XG4iXX0=