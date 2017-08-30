import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from "app/auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

    onSaveData() {
        this.dataStorageService.storeRecipe().subscribe((response: Response) => {
            console.log(Response);
        });
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}
