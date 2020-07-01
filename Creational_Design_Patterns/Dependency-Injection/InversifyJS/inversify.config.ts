// file that holds the container 

import 'reflect-metadata'; // important to have. Otherwise error `TypeError: Reflect.hasOwnMetadata is not a function`
import { Container } from 'inversify';
import { TYPES } from './types';
import { ConcreteA } from './concreteA';
import { IDepA } from './idepa';
import { IDepB } from './idepb';
import { ConcreteB } from './concreteB';
import { IDepC } from './idepc';
import { ConcreteC } from './concreteC';

// the scope is transient by default. This can change if we pass a default in the container init

// let container = new Container();
let container = new Container({
    defaultScope: "Singleton" // can be: Singleton, Request, Transient
});

// this means that every time we will request an instance if IDepA, we will get a singleton
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();
// container.bind<IDepA>(TYPES.IDepA).to(ConcreteA);

// transient (this is the default). This is same as the one commented out
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();
// container.bind<IDepB>(TYPES.IDepB).to(ConcreteB);

// request scope - it will return the same instance until we call containter.unbind
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope(); 

export default container;