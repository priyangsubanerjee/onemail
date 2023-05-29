## Onemail

Onemail is a simple, reliable API for sending html temaplates directly from your frontend app to your users' inbox.

![name.png](https://magicbell.com/api/og-images?url=https://magicbell.ghost.io/content/images/2022/01/EmailAPIs.jpeg)

## Getting Started

- Generate credential from [here](https://onemail.vercel.app/)
- Install `node-fetch` package

```
const sendEmail = () => {

    let endpoint = "https://onemail.vercel.app/api/send";

    let params = {
        to: "",
        subject: "",
        text: "",
        html: "",
        secret: ""
    }

    await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(params)
    });

    // email will be delivered in the background
}
```
