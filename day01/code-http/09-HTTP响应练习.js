const http = require('http');
const server = http.createServer((request, response) => {
    response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                td{
                    width:20px;
                    height:11px;
                }
                table tr:nth-child(odd){
                    background:#aef;
                }
                table tr:nth-child(even){
                    background:#fcb;
                }
                table,td{
                    border-collapse:collapse;
                }
            </style>
        </head>
        <body>
            <table border="1">
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
            </table>
            <script>
                let tds = document.querySelectorAll('td');
                tds.forEach(item =>{
                    item.onclick = function(){
                        this.style.background = '#222';
                    }
                })
            </script>
        </body>
        </html>
        `);
});

server.listen(9000, ()=>{
    console.log('服务已经启动....');
})