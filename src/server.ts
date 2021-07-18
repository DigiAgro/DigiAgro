import { http } from './http';
console.log('process.env.PORT', process.env.PORT)
const port = process.env.PORT === undefined ? '3000' : process.env.PORT

http.listen(port, () => console.log("Server is running PORT: "+ port ));