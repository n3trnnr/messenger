const http = require('http')
const fs = require('fs')

const requestHandler = (request, response) => { //Обработчик запросов
    // console.log(request.url);

    response.setHeader('Access-Control-Allow-Origin', '*')//setHeader - позволяет вам установить только один заголовок
    response.setHeader('Access-Control-Allow-Methods', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    console.log('request.method: ', request.method);

    if (request.method === 'OPTIONS') {
        response.statusCode = 200
        response.end('Succsess')
    } else {

        const tokens = {}

        fs.readFile(__dirname + '/data/usersData.json', (error, data) => { //__dirname — это переменная, которая указывает абсолютный путь к каталогу, содержащему текущий исполняемый файл.

            switch (request.url) {
                case '/users':
                    switch (request.method) {
                        case 'POST':
                            postMethod(request, ({ token }) => {

                                const authorizationToken = request.headers['authorization']
                                console.log('authorizationToken: ', authorizationToken);

                                const clientToken = authorizationToken
                                // const clientToken = token.token
                                // console.log('clientToken: ', token)

                                fs.readFile(__dirname + '/data/tokens.json', (error, tokensData) => {

                                    console.log('tokensData: ', Object.values(JSON.parse(tokensData)));

                                    if (authorizationToken && ~Object.values(JSON.parse(tokensData)).indexOf(clientToken)) {
                                        console.log('succsess');

                                        response.statusCode = 200
                                        response.setHeader('Content-type', 'application/json')
                                        response.end(data)
                                    } else {
                                        response.statusCode = 403
                                        response.end('Forbidden')
                                    }
                                })
                            })
                            break

                        default:
                            response.statusCode = 404
                            response.end('not found')
                            break;
                    }
                    break

                case '/dialogues':
                    switch (request.method) {
                        case 'GET':
                            fs.readFile(__dirname + '/data/dialogues.json', (error, data) => {
                                if (error) {
                                    response.statusCode = 404
                                    response.end('Not found')
                                } else {
                                    response.statusCode = 200
                                    response.setHeader('Content-type', 'application/json')
                                    response.end(data)
                                }
                            })

                            break

                        default:
                            response.statusCode = 404
                            response.end('not found')
                            break;
                    }
                    break

                case '/login':
                    switch (request.method) {
                        case 'POST':
                            postMethod(request, (reqAuthorizationData) => {

                                //данные из callback
                                console.log('reqAuthorizationData: ', reqAuthorizationData);

                                fs.readFile(__dirname + '/data/usersAuthorizationData.json', (error, data) => {//__dirname - Путь на сервере до папки
                                    if (error) {
                                        response.statusCode = 502
                                        response.end('Server error')
                                        return
                                    }

                                    let isLogin = false
                                    const usersAuthorizationData = JSON.parse(data)
                                    // console.log('usersAuthorizationData: ', usersAuthorizationData);

                                    for (let userData of usersAuthorizationData) {
                                        if (
                                            userData.login === reqAuthorizationData.login &&
                                            userData.password === reqAuthorizationData.password
                                        ) {
                                            isLogin = true
                                        }
                                    }

                                    if (isLogin) {
                                        tokens[reqAuthorizationData.login] = `${reqAuthorizationData.login}_${reqAuthorizationData.password}`
                                        // console.log('tokens: ', tokens);

                                        fs.writeFile(__dirname + "/data/tokens.json", JSON.stringify(tokens), () => { })

                                        response.setHeader('Content-type', 'application/json')
                                        response.statusCode = 200
                                        response.end(JSON.stringify({ token: tokens[reqAuthorizationData.login] }))
                                    } else {
                                        response.statusCode = 401
                                        response.end('Unauthorized')
                                    }
                                })
                            })
                            break;

                        default:
                            response.statusCode = 404
                            response.end('not found')
                            break;
                    }
                    break

                default:
                    response.statusCode = 404
                    response.end('not found')
                    break
            }
        })
    }

    // response.writeHead(200) //writeHead - позволит вам установить почти все о заголовке ответа, включая код состояния, содержимое и несколько заголовков.
    // response.setHeader('Content-type', 'text/html')
    // response.end('<h1>some important text</h1>')
}

const server = http.createServer(requestHandler)// Сервер
server.listen(8888) //Установка порта


const postMethod = (request, callback) => {
    const body = []
    request.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        const strData = Buffer.concat(body).toString()
        const objData = JSON.parse(strData)
        callback(objData)//callback = objData, callback хранит в себе предыдущее состояние 
        //т.е. данные из objData, которые можно вызвать в функции postMethod(requets, (данные из callback)=>{log(данные из callback)})
        // console.log('callback: ', callback(objData))
    })
}