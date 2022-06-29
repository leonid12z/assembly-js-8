const CounterPlugin = function ({
   rootSelector,
   initialValue = 0,
   step = 1,
} = {}) {
   this._value = initialValue;
   this._step = step;
   this._refs = this._getRefs(rootSelector);

   this._bindEvents();
   this._updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
   const refs = {};
   refs.container = document.querySelector(rootSelector);
   refs.incrementBtn = refs.container.querySelector('[data-increment]');
   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
   refs.value = refs.container.querySelector('[data-value]');

   return refs;
};

CounterPlugin.prototype._bindEvents = function () {
   this._refs.incrementBtn.addEventListener('click', () => {
      console.log('CounterPlugin.prototype._bindEvents -> this', this);
      this.increment();
   });

   
   this._refs.decrementBtn.addEventListener('click', () => {
      console.log('CounterPlugin.prototype._bindEvents -> this', this);
      this.decrement();
   });
};

new CounterPlugin({ rootSelector: '#counter-1', step: 10, initialValue: 100 });

new CounterPlugin({ rootSelector: "#counter-2", step: 5 });