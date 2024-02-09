const tasksRepository = require("./tasksRepository")



describe("pruebas", ()=>{

    // prueba unitaria
    test("Get all tasks", ()=>{
        // Arrage
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll()

        // Assert
        expect(tasks.length).toBe(2)
        expect(tasks.length== 2).toBe(true)
        expect(typeof task == 'array')
    })

    test("Get one task by id", ()=>{
        // Arrage
        let tasks = {};

        // Act 
        task = tasksRepository.getById(1)

        // Assert
        expect(task.title == 'Task 1').toBe(true)
        expect(task.title == 'Task 100').toBe(false)
    })

})