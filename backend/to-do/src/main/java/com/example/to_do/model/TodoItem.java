package com.example.to_do.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoItem {
    @Id
    private String id;

    private String text;
    private String createdAt;
    private boolean completed;
}