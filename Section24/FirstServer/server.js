import express from 'express'

const app = express();

app.use((req, res, next) => {
  console.log('This is a Middleware Function')
  next();
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('getting Root');
});

app.get('/profile', (req, res) => {
  res.send('getting Profile')
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  const user = {
    name: 'Sally',
    hobby: 'Hockey'
  };
  res.send('Success');
});

app.listen(3000);