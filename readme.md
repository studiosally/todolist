# Api tasks

dragula - libreria drag and drop

## List all task

```
    curl 127.0.0.1:3000/Tasks
    http://127.0.0.1:3000/Tasks?api_key=12345
```


## Add Task

OK
```
    curl -X POST --data "title=correr" 127.0.0.1:3000/Tasks
    curl -X POST --data "title=correr" 127.0.0.1:3000/Tasks?api_key=12345
```


## Remove by Id

OK
```
curl -X DELETE 127.0.0.1:3000/Tasks/592415a8b4954a0b84a27c45
curl -X DELETE 127.0.0.1:3000/Task/59256dbab370830a610b19c3




```



## Update data by Id

OK
```
    curl -X PUT --data "title=escalar" 127.0.0.1:3000/Tasks/59256bc71631dc099a188f43
    curl -X PUT --data "name=Ringo&age=58" localhost:3000/cat/59254237d2046f0c42a9497a
    curl -X PUT --data "age=36" localhost:3000/cat/59254922a5df6b175ac64f52
```
