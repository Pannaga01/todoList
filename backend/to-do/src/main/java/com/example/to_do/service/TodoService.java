package com.example.to_do.service;

import com.example.to_do.model.TodoItem;
import com.example.to_do.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    // Create a new item
    public TodoItem addItem(TodoItem item) {
        // Generate ID and timestamp server-side
        if (item.getId() == null || item.getId().isEmpty()) {
            item.setId(UUID.randomUUID().toString());
        }
        if (item.getCreatedAt() == null || item.getCreatedAt().isEmpty()) {
            item.setCreatedAt(LocalDateTime.now().toString());
        }

        return repository.save(item);
    }

    // Get all items
    public List<TodoItem> getAllItems() {
        return repository.findAll();
    }

    // Update an existing item
    public TodoItem updateItem(String id, String updatedText) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setText(updatedText);
                    return repository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + id));
    }

    // Delete an item
    public void deleteItem(String id) {
        repository.deleteById(id);
    }

    public TodoItem toggleCompleted(String id) {
        return repository.findById(id)
                .map(item -> {
                    item.setCompleted(!item.isCompleted()); // toggle the status
                    return repository.save(item);
                })
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + id));
    }

}