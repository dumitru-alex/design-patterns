## Overview
- when incorporating DI in your app, `new` is not allowed
- allowed to create instances of value objects or a service data object that does not depend on other entities in your app
- factories are welcomed to use `new` to create new instances, because that's what they're made for
- strictly prohibited to use `new` to instantiate dependencies

## Example:

ProfileService --- UserService --- HttpClient
                |               |- AuthService
                |- HttpClient  --- XHRBackend
                |- Endpoints

w/o DI
```typescript
export class ProfileService {
    private _usersService: UsersService;
    private _httpClient: HttpClient;
    private _endpoints: Endpoints;

    public constructor() {
        this._usersService = new UsersService();
        this._httpClient: new HttpClient();
        this._endpoints: new Endpoints();
    }
}
```
- by doing this, we need to know how each class is initialized. For example, the UsersService would need an instance of AuthService; without it, the constructor will fail
- the deeper the dependency tree goes, the harder it gets
- DI suggests that we inverse the flow of control, and we request the dependencies in the constructor, like this:

w/ DI:
```typescript
export class ProfileService {
    private _usersService: UsersService;
    private _httpClient: HttpClient;
    private _endpoints: Endpoints;

    public constructor(usersService: UsersService,
                       httpClient: HttpClient,
                       endpoints: Endpoints) {
        this._usersService = usersService;
        this._httpClient = httpClient;
        this._endpoints = endpoints;
    }
}
```
- we are no longer using `new` to create instances of dependencies
- the dependencies are passed over to the constructor already initialized, thus the constructor doesn't need to know how to create those instances
- in this case, the ProfileService doesn't init the dependencies AND is also doesn't know how to do it, then who does? answer is: `DI Container`

## DI Container
- every time you create a new component in your application, you register it with a container
- it knows exactly how each component is initialized
- the container provides an interface to retrieve an instance of each component with all of its dependencies met

### What does a DI Container do

- support the registration of a class type by interface
- the 2 will be paired inside a private dictionary

IUsersService ->|
                |-> DI Container -> IUsersService -> UsersService
UsersService  ->|

- later, when we request a concrete implementation by its interface, we will get a concrete implementation

IUsersService -> DI Container -> UsersService

- when we register the type, we don't pass an actual instance
- the container is responsible of invoking the constructor, pass the required dependencies and return a new instance every time

> DI Container is a.k.a. IoC Container (Inversion of Control)

## EXTRAS

### Decorators

- an experimental TS feature that allows us to annotate classes, methods and properties in order to extend their functionality without the need to subclass them
- have to be enabled in `tsconfig.json`;
```JSON
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```
- They can be applied to:
    - class
    - method
    - property
    - accessors

> :warning: Implementation might change in the future

- The Factory (for decorators) runs only once, which means it only has one chance to return the decorator. The decorator itself runs every time you invoke the method. If you set up a `hook` and you call `bar` multiple times, the `hook` will run multiple times, however, the decorator factory that binds `hook` to the `bar` method only runs once


### InversifyJS

- [website](https://inversify.io)

- setup in `config.json` (on top of `tsc --init`)
    ```JSON
    {
        "lib": ["es6"],
        "types": ["reflect-metadata", "node"],
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
    }
    ```

### Dependency scopes 
- singleton
- transient
- request

Done in `inversify.config.ts`


> [BACK TO MENU](../README.md)