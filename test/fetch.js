fetch("http://127.0.0.1:3000/user/regist", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTg4MzA3OTcsImlhdCI6MTYxODIyNTk5NywidXNlcl9lbWFpbCI6InJhbmNoZW5nQGp3emcuY29tIn0.jh-Q1aGJ2xHllf-Whtw7GNqncgzQZxNG1TJ1t1mCjHY"
    },
    "referrer": "https://172.16.103.34:8081/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": JSON.stringify({
        userName: 'rancheng',
        password: '1111111'
    }),
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
});