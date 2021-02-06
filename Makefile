REPORTER = spec


test-coverage:
	@NODE_ENV=test cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js || true

.PHONY: test