const sinon = require('sinon');

it('throws a "Maximum call stack size exceeded" error in sinon deepEqual', () => {
  const spy = sinon.spy();

  const firstObj = {};
  firstObj['aKeyName'] = firstObj;

  const secondObj = {};
  secondObj['aKeyName'] = secondObj;

  spy(firstObj);

  sinon.assert.calledWith(spy, secondObj);
});
