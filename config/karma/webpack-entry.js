import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';
import chaiSubset from 'chai-subset';
import dirtyChai from 'dirty-chai';
import injectTapEventPlugin from 'react-tap-event-plugin';
import sinonChai from 'sinon-chai';


const sinon = window.sinon;


chai.use(chaiAsPromised);
// dirty-chai must be loaded after chai-as-promised and before any other assertions.
chai.use(dirtyChai);
chai.use(chaiEnzyme());
chai.use(chaiSubset);
chai.use(sinonChai);


chai.config.truncateThreshold = 0;


window.expect = chai.expect;


beforeEach(() => {
  window.sinon = sinon.sandbox.create();
});


afterEach(() => {
  window.sinon.restore();
  window.sinon = sinon;
});


// Load tap events. Not doing this, causes a warning.
injectTapEventPlugin();


// Load all source files for coverage.
const context = require.context('../../src', true, /^((?!main).)*$/);
context.keys().forEach(context);
