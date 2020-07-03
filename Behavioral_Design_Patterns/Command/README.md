- we using an observer to create a worker process
- a worker process is a process that will execute certain tasks at a later time
- it will take complex tasks that don't need to run straight away, and will run them later 

- to be used in case you don't want to wait for the task to finish to block the event queue. It can be any type of async functionality that you don't want to implement using promises or async/await. The idea is that you don't need (or want) to know when that process finishes. You only want to know when it starts and when it will be executed in the future. You don't care when it finishes, because it doesn't affect the execution of your code