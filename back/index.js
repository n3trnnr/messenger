const http = require('http')
const fs = require('fs')

const requestHandler = (request, response) => { //Обработчик запросов
    // console.log(request.url);

    response.setHeader('Access-Control-Allow-Origin', '*')//setHeader - позволяет вам установить только один заголовок

    const body = []
    request.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        console.log('body: ', body);
    })



    fs.readFile(__dirname + '/data/usersData.json', (error, data) => { //__dirname — это переменная, которая указывает абсолютный путь к каталогу, содержащему текущий исполняемый файл.

        switch (request.url) {
            case '/messenger':
                switch (request.method) {
                    case 'GET':
                        response.statusCode = 200
                        response.setHeader('Content-type', 'application/json')
                        response.end(data)
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
                        fs.readFile(__dirname + '/data/usersAuthorizationData.json', (error, data) => {
                            if (error) {
                                response.statusCode = 502
                                response.end('Server error')
                                return
                            }
                            // console.log('reques: ', request.payload);
                            const user = null // Данные из getData, передаваемый логин и пароль.
                            const users = JSON.parse(data)
                            console.log('users: ', users);
                            response.setHeader('Content-type', 'application/json')
                            response.statusCode = 200
                            response.end(data)
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

    // fs.readFile(__dirname + '/data/dialogues.json' || '/data/usersData.json', (error, data) => {

    //     switch (request.url) {
    //         case '/dialogues':
    //             response.statusCode = 200
    //             response.setHeader('Content-type', 'application/json')
    //             response.end(data)
    //             break;
    //         case '/messenger':
    //             response.statusCode = 200
    //             response.setHeader('Content-type', 'application/json')
    //             response.end(data)
    //             break
    //         default:
    //             response.statusCode = 404
    //             response.end('not found')
    //             break;
    //     }
    // })

    // response.writeHead(200) //writeHead - позволит вам установить почти все о заголовке ответа, включая код состояния, содержимое и несколько заголовков.
    // response.setHeader('Content-type', 'text/html')
    // response.end('<h1>some important text</h1>')

}

const server = http.createServer(requestHandler)// Сервер
server.listen(8888) //Установка порта
