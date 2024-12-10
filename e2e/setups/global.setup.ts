export default async function globalSetup() {
    console.log({ environment: `${process.env.FORNTEND_TEST_API_KEY}` });
    const userEmails:string[] = ["josias.rojas@haulmer.com"];
    // Reset workspaces
    fetch("https://api.haulmer.dev/v2/workspace/testing/reset-to-default", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            userEmails,
            apikey: process.env.FORNTEND_TEST_API_KEY
        })
    })
        .then(response => {
            if (response.status !== 200) {
                throw response;
            }
            return response.json();
        })
        .then(data => {
            console.log(`Workspaces resets: ${data}`);
        })
        .catch(error => {
            console.error(`Fail workspace reset with error: ${error}`);
        });
}
