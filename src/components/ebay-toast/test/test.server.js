const { use } = require('chai');
const { testEventsMigrator } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('toast', () => {
    testEventsMigrator(
        require('../migrator'),
        'toast',
        [{ from: 'show', to: 'open' }, 'close'],
        '../index.marko'
    );
});
