# Steps to reproduce
By default, the only model in this sandbox (`Newspaper`) is connected to MongoDB. I also set up and tested this using Postgres, it's exactly the same. In either case, make sure you have a db running.

```shell
$ npm install
$ npm start
```

In another terminal run the test script
```shell
$ node testEmbedsMany.js
```

which will create a `Newspaper`, and then subsequently post single `Article`s.  Results will be smilar to
```
Posted newspaper. { name: 'New York Times',
  id: '583cb5b353066d3132bb85e3',
  _articles: [] }
Server reported successul post. { name: 'Article Three', id: 'e7524b7e3a99aaa6c66a3b8c' }
Server reported successul post. { name: 'Article Two', id: 'cc46abad8a0b738a0296321d' }
Server reported successul post. { name: 'Article One', id: '93894b86488da806304bd82b' }
{"name":"New York Times","id":"583cb5b353066d3132bb85e3","_articles":[{"name":"Article Three","id":"e7524b7e3a99aaa6c66a3b8c"}]}
```
or even
```
Posted newspaper. { name: 'New York Times',
  id: '583cb64553066d3132bb85ea',
  _articles: [] }
Server reports successully posted: { name: 'Article Four', id: '77f014498667fc9fc12b3333' }
Server reports successully posted: { name: 'Article Three', id: '58b4238fc88a80e700ee2d54' }
Server reports successully posted: { name: 'Article Two', id: '723007408523ac688b0396b1' }
Server reports successully posted: { name: 'Article One', id: '64b726ff6def04020a1fbf7e' }
Retrieved newspaper: {"name":"New York Times","id":"583cb64553066d3132bb85ea","_articles":[{"name":"Article Two","id":"723007408523ac688b0396b1"},{"name":"Article Four","id":"77f014498667fc9fc12b3333"}]}
```

As far as I can see, results are pretty random.
