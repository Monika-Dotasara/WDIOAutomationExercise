describe('Timeout Issue', () => {

    // Test which takes less than or equal to the default jasmine timout. Status: Passed.
    it('Test with timout less than or equal to the Default timeout', async () => {
        console.log('Wait for 3 seconds....');
        await new Promise(r => setTimeout(r, 3000));
        console.log('Test is expected to pass as it takes less than 5 secs defined in the WDIO config.');
    });

    // Test which takes more than the default jasmine timout. Status: Failed.
    // Test passes in v7.x but fails in latest WDIO 8 versions because it now uses the configured default and ignores the spec timeout.
    it('Test with timout more than the Default timeout', async () => {
        console.log('Wait for 5.2 seconds....');
        await new Promise(r => setTimeout(r, 5200));
        console.log('Test fails even though it takes less than the custom timeouts.');
    }, 5500);
});
