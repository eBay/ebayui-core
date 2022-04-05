import { use } from 'chai';
const { testEventsMigrator } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('drawer', () => {
    testEventsMigrator(
        require('../migrator'),
        'drawer',
        [{ from: 'show', to: 'open' }, 'collapsed', 'close', 'expanded'],
        '../index.marko'
    );
});
