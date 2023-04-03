import express from 'express'; 
const PORT = 3001; 
const app = express(); 

app.get('/hello', (req,res) => {
    res.send('Hello there!');
});

app.get('/', (req,res) => {
    res.send('I am index.')
})


app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}.`);
}); 

