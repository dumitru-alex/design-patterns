export class DIContainer {
    private static _instance: DIContainer = new DIContainer();
    private _dependencies: {[key: string]: Object} = {};

    constructor() {
        if (DIContainer._instance) {
            throw new Error('Singleton class. Cannot instantiate using new');
        }
        DIContainer._instance = this;
    }

    public static get instance(): DIContainer {
        return DIContainer._instance;
    }

    // Register a new class type in the container
    register(name: string, dependencies: string[], implementation: any) {
        if (this._dependencies[name]) {
            throw new Error("Dependency already registered");
        }
        // get implementations from all dependencies provided
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        // create an instance by passing all dependencies using spread operator and register it
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    }

    resolve<T>(name: string): T {
        if (!this._dependencies[name]) {
            throw new Error(`Unresolved dependency: ${name}`);
        }
        return this._dependencies[name] as T;
    }   

    // helper function that reads through the dependency list and returns
    // a list with all instances for said dependencies from the container
    private getDependenciesImplementations(names: string[]): Object[] {
        return names.map(name => this.resolve(name));
    }
}