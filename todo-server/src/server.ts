import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';
import * as Mongo from 'mongoose';

const app = new Koa();
const router = new Router();

Mongo.connect('mongodb://localhost', {
    user: 'root', pass: 'example', dbName: 'koa-example'
}).then(value => {
    console.log('Connection to MongoDb succeeded');
}).catch(reason => {
    console.error('Failed to connect to MongoDb', reason);
})

const todoSchema = new Mongo.Schema({
    title: String,
    description: String,
    timestamp: Date
})

const Todo = Mongo.model('Todo', todoSchema);

app.use(bodyParser())

router.get('/', async (ctx) => {
    let todos: any[] = [];
    ctx.body = await Todo.find()
});

router.post('/todo', async (ctx) => {
    const data = ctx.request.body;
    if (data.title && data.description && data.timestamp) {
        const newTodo = new Todo({
            title: data.title,
            description: data.description,
            timestamp: new Date(data.timestamp)
        })
        ctx.body = await newTodo.save((err, res) => {
            if (err) {
                console.log('Failed saving');
                console.log(err)
            } else {
                console.log('New todo')
            }
        })
    }
})

router.delete('/:id', async (ctx) => {
    let query = {'_id': ctx.params.id};
    ctx.body = await Todo.deleteOne(query)
})
app.use(Cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(12000);

console.log('Server running on port 3000');