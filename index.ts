import express, {Request, Response} from 'express';

const app = express();

const PORT = 3000;
app.get('/', (req:Request, res:Response)=>{
    console.log("Hello Wrold");
    res.send("Helo wolrd!");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});