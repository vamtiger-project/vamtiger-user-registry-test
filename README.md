# vamtiger-user-registry
A webcomponent for viewing, adding and deleting users from a generalised registry.

# Installation
```html
<script src="https://cdn.jsdelivr.net/npm/vamtiger-user-registry@latest/build/vamtiger-user-registry.js">
```

# Usage
```html
<vamtiger-user-registry>
    data-get-users-url="/api/get-users"
    data-get-user-url="/api/get-user"
    data-add-new-user-url="/api/add-new-user"
    data-delete-user-url="/api/delete-user"
</vamtiger-user-registry>
```
|Attribute|Method|Description|
|---------|------|-----------|
|**data-get-users-url**|GET|Enpoint returning a paginted list of users|GET
|**data-get-user-url**|GET|Endpoint returning a single user record|
|**data-add-new-user-url**|POST|Enpoint for adding a new user record|
|**data-delete-user-url**|DELETE|Enpoint for removing a user record|

## data-get-users-url
An endpoint returning a paginated list of users.

```typescript
interface IGetUsersResponse extends IResponseBase {
    data: {
        users: {
            next_page_url: string;
            data: IUser[]
        }
    }
}

interface IResponseBase {
    result: 'successful' | 'failed' | 'error';
    message: string;
}

interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    position: string;
}
```

## data-get-user-url
An endpoint return a user record.

```typescript
interface IGetUserSuccessResponse extends IResponseBase {
    result: 'successful',
    message: 'retrieved user(s)',
    data: {
        user: IUser
    }
}

interface IGetUserFailedResponse extends IResponseBase {
    result: "failed",
    message: "retrieved user(s) failed",
    data: {
        user: number;
    }
}
```

## data-add-new-user-url
An enpoint for creating a new user record.
```typescript
interface IAddNewUserSuccessRequestBody extends IUser{}

interface IAddNewUserSuccessResponse extends IResponseBase {
    result: 'successful';
    message: 'added new user',
    data: {
        user: number
    }
}

interface IAddNewUserFailedResponse extends IResponseBase {
    result: 'failed';
    message: 'failed to add new user',
    data: {
        [key: string]: {
            error: string;
            errorDescription?: string;
        }[]
    }
}
```

## data-delete-user-url
An endpoint for removing a user record.
**e.g._some/url/${user_id}_**
```typescript
interface IDeleteUserResponse extends IResponseBase {
    data: {
        user: number;
        delete: number;
    }
}
```

## Test Mode
The custom element can also be rendered in **_test mode_** to toggle layout markers.

```html
<vamtiger-user-registry>
    data-test-mode
</vamtiger-user-registry>
```
[Demo](https://vamtiger-project.github.io/vamtiger-user-registry-web-component/build/)

## [Angular](https://angular.io) Compatibility
Custom elements integrate fairly easily with [Angular](https://angular.io). To enable support, update _**app.module.ts**_:
```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    ...,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
});
```

Create a placeholder component:
```bash
ng generate component vamtiger-user-registry
```

Define the required url properties for the newly created component, _**vamtiger-user-registry.component.ts**_:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vamtiger-user-registry',
  templateUrl: './vamtiger-user-registry.component.html',
  styleUrls: ['./vamtiger-user-registry.component.css']
})
export class VamtigerUserRegistryComponent implements OnInit {
  getUsersUrl = 'http://127.0.0.1:8000/api/get-users';
  getUserUrl = 'http://127.0.0.1:8000/api/get-user';
  addNewUserUrl = 'http://127.0.0.1:8000/api/add-new-user';
  deleteUserUrl = 'http://127.0.0.1:8000/api/delete-user';
  headerImageurl = 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/vamtiger-mental-health-botswana-2018-json-ld.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
```

Reference *vamtiger-user-registry* in the component template (i.e. _**vamtiger-user-registry.component.html**_):
```html
<vamtiger-user-registry
[attr.data-get-users-url]="getUsersUrl"
[attr.data-get-user-url]="getUserUrl"
[attr.add-new-user-url]="addNewUserUrl"
[attr.delete-user-url]="deleteUserUrl"
[slot]=""
>
    <img slot="header-image" [src]="headerImageurl">
    <div slot="header-caption">
        Vamtiger User Registry Angular
    </div>
</vamtiger-user-registry>
```
## [React](https://reactjs.org) Compatibility
Custom Elements can also be used with [React](https://reactjs.org):
```typescript
class VamtigerUserRegistryReact extends React.Component {
    readonly vamtigerUserRegistry: React.RefObject<VamtigerUserRegistry>;

    constructor(props: any) {
        super(props);

        this.vamtigerUserRegistry = React.createRef();
    }

    componentDidMount() {
        const vamtigerUserRegistry = this.vamtigerUserRegistry.current;

        if (vamtigerUserRegistry) {
            vamtigerUserRegistry.addEventListener(EventName.connected, () => this.handleConnected());
        }
    }

    handleConnected() {
        const container = this.vamtigerUserRegistry.current?.parentElement;

        if (container) {
            container.parentElement?.removeChild(container);
        }

        resolve();
    }

    render() {
        return (
            <vamtiger-user-registry
                ref={this.vamtigerUserRegistry}
            >
            </vamtiger-user-registry>
        );
    }
}

const container = document.createElement('div');
container.id = 'vamtiger-user-registry-react';
document.body.appendChild(container);

ReactDOM.render(
    <VamtigerUserRegistryReact />,
    container
);
```

# Example Backend API
|Langauage|Framework|Repository|
|-|-|-|
|PHP|Laravel|[vamtiger-user-registry-laravel](https://github.com/vamtiger-project/vamtiger-user-registry-laravel)|