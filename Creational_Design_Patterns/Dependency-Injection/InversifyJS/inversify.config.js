"use strict";
// file that holds the container 
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // important to have. Otherwise error `TypeError: Reflect.hasOwnMetadata is not a function`
var inversify_1 = require("inversify");
var types_1 = require("./types");
var concreteA_1 = require("./concreteA");
var concreteB_1 = require("./concreteB");
var concreteC_1 = require("./concreteC");
// the scope is transient by default. This can change if we pass a default in the container init
// let container = new Container();
var container = new inversify_1.Container({
    defaultScope: "Singleton" // can be: Singleton, Request, Transient
});
// this means that every time we will request an instance if IDepA, we will get a singleton
container.bind(types_1.TYPES.IDepA).to(concreteA_1.ConcreteA).inSingletonScope();
// container.bind<IDepA>(TYPES.IDepA).to(ConcreteA);
// transient (this is the default). This is same as the one commented out
container.bind(types_1.TYPES.IDepB).to(concreteB_1.ConcreteB).inTransientScope();
// container.bind<IDepB>(TYPES.IDepB).to(ConcreteB);
// request scope - it will return the same instance until we call containter.unbind
container.bind(types_1.TYPES.IDepC).to(concreteC_1.ConcreteC).inRequestScope();
exports.default = container;
