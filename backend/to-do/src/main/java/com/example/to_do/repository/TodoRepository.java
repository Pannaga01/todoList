package com.example.to_do.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.to_do.model.TodoItem;

public interface TodoRepository extends JpaRepository<TodoItem, String> {
}