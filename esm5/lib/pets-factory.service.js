import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    PetsFactoryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PetsFactoryService_Factory() { return new PetsFactoryService(); }, token: PetsFactoryService, providedIn: "root" });
    PetsFactoryService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PetsFactoryService);
    return PetsFactoryService;
}());
export { PetsFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXRzLWZhY3RvcnkvIiwic291cmNlcyI6WyJsaWIvcGV0cy1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDO0lBSUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sR0FBUztRQUFoQixpQkFnQkM7UUFmQyxPQUFPLElBQUksT0FBTyxDQUFFLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFO2dCQUN6QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUcsa0JBQWtCO2lCQUNwQzthQUNGLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBeEJVLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csa0JBQWtCLENBeUI5Qjs2QkEvQkQ7Q0ErQkMsQUF6QkQsSUF5QkM7U0F6Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBldCB9IGZyb20gJy4vbW9kZWxzL3BldC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBldHNGYWN0b3J5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBhcGlVcmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwaVVybCA9ICdodHRwczovL3BldHN0b3JlLnN3YWdnZXIuaW8vdjIvJztcbiAgfVxuXG4gIGFkZFBldChwZXQ6IElQZXQpOiBQcm9taXNlPElQZXQ+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2godGhpcy5hcGlVcmwgKyAncGV0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGV0KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzb2x2ZShwZXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==