

var data = [
    {"type": 0, "data": {}, "timestamp": 1618308675702},
    {
        "type": 1,
        "data": {},
        "timestamp": 1618308675703
    },

    {
        "type": 4,
        "data": {"href": "https://localhost:8388/index2.html", "width": 1333, "height": 219},
        "timestamp": 1618308675703

    },
    {
        "type": 2, "data": {
            "node": {
                "type": 0, "childNodes": [{"type": 1, "name": "html", "publicId": "", "systemId": "", "id": 2}, {
                    "type": 2, "tagName": "html", "attributes": {"lang": "en"}, "childNodes": [{
                        "type": 2,
                        "tagName": "head",
                        "attributes": {},
                        "childNodes": [{"type": 3, "textContent": "\n    ", "id": 5}, {
                            "type": 2,
                            "tagName": "meta",
                            "attributes": {"charset": "UTF-8"},
                            "childNodes": [],
                            "id": 6
                        }, {"type": 3, "textContent": "\n    ", "id": 7}, {
                            "type": 2,
                            "tagName": "meta",
                            "attributes": {
                                "name": "viewport",
                                "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                            },
                            "childNodes": [],
                            "id": 8
                        }, {"type": 3, "textContent": "\n    ", "id": 9}, {
                            "type": 2,
                            "tagName": "meta",
                            "attributes": {"http-equiv": "X-UA-Compatible", "content": "ie=edge"},
                            "childNodes": [],
                            "id": 10
                        }, {"type": 3, "textContent": "\n    ", "id": 11}, {
                            "type": 2,
                            "tagName": "title",
                            "attributes": {},
                            "childNodes": [{"type": 3, "textContent": "Document", "id": 13}],
                            "id": 12
                        }, {"type": 3, "textContent": "\n    ", "id": 14}, {
                            "type": 2,
                            "tagName": "script",
                            "attributes": {
                                "src": "https://localhost:8388/ea-record.js?t=111",
                                "id": "eaRecordScript",
                                "projectkey": "ddc7b8dbfe0f4b9dbf845aa7983472c2"
                            },
                            "childNodes": [],
                            "id": 15
                        }, {"type": 3, "textContent": "\n\n    ", "id": 16}, {
                            "type": 5,
                            "textContent": " <script src=\"https://dev.1111111111.net/ea_sdk/ea-record.js?t=1112\" id=\"eaRecordScript\" projectKey=\"ddc7b8dbfe0f4b9dbf845aa7983472c2\"></script>\n",
                            "id": 17
                        }, {"type": 3, "textContent": "\n\n\n", "id": 18}],
                        "id": 4
                    }, {"type": 3, "textContent": "\n", "id": 19}, {
                        "type": 2,
                        "tagName": "body",
                        "attributes": {},
                        "childNodes": [{"type": 3, "textContent": "\n", "id": 21}, {
                            "type": 2,
                            "tagName": "input",
                            "attributes": {"type": "text"},
                            "childNodes": [],
                            "id": 22
                        }, {"type": 3, "textContent": "\n", "id": 23}, {
                            "type": 2,
                            "tagName": "p",
                            "attributes": {},
                            "childNodes": [{"type": 3, "textContent": "saddfsfadfdffa", "id": 25}],
                            "id": 24
                        }, {"type": 3, "textContent": "\n", "id": 26}, {
                            "type": 2,
                            "tagName": "script",
                            "attributes": {},
                            "childNodes": [{"type": 3, "textContent": "SCRIPT_PLACEHOLDER", "id": 28}],
                            "id": 27
                        }, {"type": 3, "textContent": "\n\n", "id": 29}],
                        "id": 20
                    }], "id": 3
                }], "id": 1
            }, "initialOffset": {"left": 0, "top": 0}
        }, "timestamp": 1618308675705
    },
    {
        //增量快照
        "type": 3,
        "data": {

            //鼠标交互
            "source": 2,
            //点击
            "type": 2,


            //domID
            "id": 22,


            //鼠标位置
            "x": 115,
            "y": 29
        },
        "timestamp": 1618308692991
    },




    {
        "type": 3,
        "data": {
            //输入
            "source": 5,
            "text": "111111",
            "isChecked": false,
            "id": 22
        },
        "timestamp": 1618308695899
    },



    {
        "type": 3,
        "data": {
            "source": 2, "type": 2, "id": 3, "x": 234, "y": 86}, "timestamp": 1618308696038},
    {
        "type": 3,
        "data": {"source": 2, "type": 2, "id": 24, "x": 66, "y": 53},
        "timestamp": 1618308706676
    }];



let json = {
    a: 1,
    b: 2
}
const { a,b } = json;
console.log(a)

let path = require('path');


let res = data.filter((ele)=>{
    return ele.type === 3 && ele.data.source === 5
})
if( res && res.length ){



    let text = res[0].data.text;
    console.log(text)
}



