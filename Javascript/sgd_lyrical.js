function printLyrics() {
    const lyrics = [
        "Haathon ko sambhale mere haathon mein",
        "Kaise haathon ko sambhale mere haathon mein..",
        "Jab tak neend na aaye, inn lakeeron mein..",
        "Baatein ho.......",
        "Haaye"
    ];

    const delays = [1.0, 0.1, 1.12, 0.9, 0.8];

    console.log("Arz kya hai?.......:\n");

    // The equivalent of time.sleep in JavaScript for a browser environment
    // requires using asynchronous functions.
    // This code uses async/await with a Promise to simulate the delays.
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function displayLyrics() {
        for (let i = 0; i < lyrics.length; i++) {
            const line = lyrics[i];
            for (const char of line) {
                process.stdout.write(char);
                await sleep(100); // 0.1 seconds
            }
            process.stdout.write("\n");
            await sleep(delays[i] * 1000); // Convert seconds to milliseconds
        }
    }

    displayLyrics();
}

printLyrics();