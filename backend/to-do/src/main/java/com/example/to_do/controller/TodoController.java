package com.example.to_do.controller;

import com.example.to_do.model.TodoItem;
import com.example.to_do.service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173") // adjust if frontend runs elsewhere
public class TodoController {

    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    // Create a new item
    @PostMapping
    public TodoItem addItem(@RequestBody TodoItem item) {
        return service.addItem(item);
    }

    // Get all items
    @GetMapping
    public List<TodoItem> getAllItems() {
        return service.getAllItems();
    }

    // Update an item
    @PutMapping("/{id}")
    public TodoItem updateItem(@PathVariable String id, @RequestBody String text) {
        return service.updateItem(id, text);
    }

    // Delete an item
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable String id) {
        service.deleteItem(id);
    }

    @PutMapping("/{id}/toggle")
    public TodoItem toggleCompleted(@PathVariable String id) {
        return service.toggleCompleted(id);
    }
}