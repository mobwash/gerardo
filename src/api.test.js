const request = require('supertest');
const app = require('./api'); 

// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); // Assuming there are 2 tasks initially
});

// Test the /tasks/:id GET endpoint
test('GET /tasks/:id returns the correct task', async () => {
  const taskId = 1; // Assuming the task with ID 1 exists
  const response = await request(app).get(`/tasks/${taskId}`);
  expect(response.status).toBe(200);
  expect(response.body.id).toBe(taskId);
});

// Test the /tasks POST endpoint
test('POST /tasks creates a new task', async () => {
  const newTask = { title: 'New Task', description: 'Do something new' };
  const response = await request(app)
    .post('/tasks')
    .send(newTask);
  expect(response.status).toBe(201);
  expect(response.body.title).toBe(newTask.title);
});

// Test the /tasks/:id PUT endpoint
test('PUT /tasks/:id updates an existing task', async () => {
  const taskId = 1; // Assuming the task with ID 1 exists
  const updatedTask = { title: 'Updated Task', description: 'Do something updated' };
  const response = await request(app)
    .put(`/tasks/${taskId}`)
    .send(updatedTask);
  expect(response.status).toBe(200);
  expect(response.body.title).toBe(updatedTask.title);
});

// Test the /tasks/:id DELETE endpoint
test('DELETE /tasks/:id deletes an existing task', async () => {
  const taskId = 1; // Assuming the task with ID 1 exists
  const response = await request(app).delete(`/tasks/${taskId}`);
  expect(response.status).toBe(204);
});
