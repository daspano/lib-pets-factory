import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
PetsFactoryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PetsFactoryService_Factory() { return new PetsFactoryService(); }, token: PetsFactoryService, providedIn: "root" });
PetsFactoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PetsFactoryService);
export { PetsFactoryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXRzLWZhY3RvcnkvIiwic291cmNlcyI6WyJsaWIvcGV0cy1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSTdCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBaUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVM7UUFDZCxPQUFPLElBQUksT0FBTyxDQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUN6QixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFHLGtCQUFrQjtpQkFDcEM7YUFDRixDQUFDO2lCQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7QUF6Qlksa0JBQWtCO0lBSDlCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxrQkFBa0IsQ0F5QjlCO1NBekJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQZXQgfSBmcm9tICcuL21vZGVscy9wZXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQZXRzRmFjdG9yeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYXBpVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcGlVcmwgPSAnaHR0cHM6Ly9wZXRzdG9yZS5zd2FnZ2VyLmlvL3YyLyc7XG4gIH1cblxuICBhZGRQZXQocGV0OiBJUGV0KTogUHJvbWlzZTxJUGV0PntcbiAgICByZXR1cm4gbmV3IFByb21pc2UgKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKHRoaXMuYXBpVXJsICsgJ3BldCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBldCksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc29sdmUocGV0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=