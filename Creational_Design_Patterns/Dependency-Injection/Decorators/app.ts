// Both implementations work, but I had issues running `tsc app.ts`; keep getting errors
// I had run `tsc init` to create the tsconfig.json file, and commented out the options regarding decorators 
// Fixed in several ways:
// tsc app.ts --experimentalDecorators --emitDecoratorMetadata --target "es5" 
// tsc (no file)
// ts-node app 
// 
export function disable1(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    descriptor.value = () => {
        throw new Error(`Method ${methodName} is disabled`);
    }
}
// this comes from ts docs
export function disable() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = () => {throw new Error("Method is disabled")}
    }
}

// Decorator Factory
export function before(hook: Function) {
    return function<T extends Function>(target: Object, methodName: string, descriptor: PropertyDescriptor) {
        return {
            get: function(this: T) {
                let originalMethod = descriptor.value!.bind(this);
                hook = hook.bind(this);

                return () => {
                    hook();
                    originalMethod();
                }
            }
        }
    }
}

// Constructor Decorator
/**
 * this decorator will be a decorator factory by default (that's usually what happens with Constructor
 * decorator - it's best practice)
 * Explanation of the Generic Function 
 * The generic indicator, the `T` type, extends a specific type that resembles the constructor
 * - it means that we want `T` to extend a method that can be invoked with `new` that can accept any amount of arguments
 * and return on object
 * - it's a weird way of saying that we want `T` to be a constructor
 * - inside the decorator, we need to return the constructor function
 * - we can't just use a property descriptor or return an arrow method, like before
 * - we need to return a class that extends the constructor
 * - this is the syntax that we always use to overwrite the constructor inside a decorator
 */
export function capitalize() {
    // 
    return function<T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            _a = "A";
            _b = "B";
        }
    }
}

@capitalize()
export class Whatever {
    private _a: string = "a";
    private _b: string = "b";

    @disable1
    // @disable()
    foo() {
        console.log("foo");
    }

    @before(() => {console.log("Before Hook")})
    bar() {
        console.log("bar");
    }

    baz() {
        console.log(this._a, this._b);
    }
}

let whatever = new Whatever();

whatever.bar();
// catch so that the program doesn't crash
try {
    whatever.foo();
} catch (error) {
    console.log(error.message);
}
whatever.baz();