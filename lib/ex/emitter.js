module.exports = Emitter;

function Emitter(obj) {
    obj._callbacks = {};
    
    if(obj) {
        return mixin(obj);
    }
}

function mixin(obj) {
    for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
    }
    return obj;
}

Emitter.prototype.on = function(event, callback) {
    this._callbacks = this._callbacks;
    this._callbacks[event] = this._callbacks[event] || [];
    this._callbacks[event].push(callback);
};

Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks;

    var args = [].slice.call(arguments, 1);

    var callbacks = this._callbacks[event];
    if(callbacks) {
        for(var i = 0; i < callbacks.length; i++) {
            callbacks[i].apply(this, args);
        }
    }
};