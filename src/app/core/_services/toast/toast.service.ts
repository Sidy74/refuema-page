import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}
  openSuccess(message: string, action: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {
        message: message,
        action: action,
        icon: 'done',
        snackbar: this.snackBar,
      },
      verticalPosition: 'top',
      panelClass: 'snackbar-success',
    });
  }
  openError(message: string, action: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {
        message: message,
        action: action,
        icon: 'error',
        snackbar: this.snackBar,
      },
      verticalPosition: 'top',
      panelClass: 'snackbar-error',
    });
  }
  openWarning(message: string, action: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {
        message: message,
        action: action,
        icon: 'warring',
        snackbar: this.snackBar,
      },
      verticalPosition: 'top',
      panelClass: 'snackbar-warning',
    });
  }
  openInfo(message: string, action: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {
        message: message,
        action: action,
        icon: 'info',
        snackbar: this.snackBar,
      },
      verticalPosition: 'top',
      panelClass: 'snackbar-info',
    });
  }
}
