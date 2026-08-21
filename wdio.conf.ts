import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    // The path of the spec files will be resolved relative from the directory of the config file unless it's absolute.
    specs: [
        './test/specs/goodwill-test.ts'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],

    // Options to be passed to Jasmine.
    jasmineOpts: {
        defaultTimeoutInterval: 60000
    },
}
