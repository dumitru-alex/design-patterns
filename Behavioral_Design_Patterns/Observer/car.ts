export class Car {
    private _currentSpeed: number = 0;
    private readonly _maxSpeed: number;
    private _currentSpeedObservers: Function[] = [];

    constructor(maxSpeed: number) {
        this._maxSpeed = maxSpeed;
    }

    get maxSpeed(): number {
        return this._maxSpeed;
    }

    get currentSpeed(): number {
        return this._currentSpeed;
    }

    set currentSpeed(value) {
        if (this._currentSpeed < 0) {
             throw new Error("Invalid current speed");
        }
        if (value > this._maxSpeed) {
            throw new Error("Engine broke");
        }
        if (this.currentSpeed != value) {
            let oldValue = this._currentSpeed;
            this._currentSpeed = value;
            this.triggerCurrentSpeedObserver(value, oldValue);
        }
    }

    public registerCurrentSpeedObserver(observer: Function) {
        if (!this._currentSpeedObservers.find(obs => obs == observer)) {
            this._currentSpeedObservers.push(observer);
        }
    }

    private triggerCurrentSpeedObserver(newValue: number, oldValue: number) {
        this._currentSpeedObservers.forEach(observer => observer(newValue, oldValue));
    }
}