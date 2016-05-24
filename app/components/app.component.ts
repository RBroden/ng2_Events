import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { EventComponent } from './events.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, AuthService]
})

@RouteConfig([
	{
		path: '/',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/signup',
		name: 'Signup',
		component: SignupComponent
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginComponent
	},
	{
		path: '/events',
		name: 'Todo',
		component: EventComponent
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent
	}
])

export class AppComponent {
	
	constructor(private _service: AuthService) {
	}

	isLoggedIn() {
		return this._service.isLoggedIn();
	}

	logout() {
		this._service.logout();
	}

 }