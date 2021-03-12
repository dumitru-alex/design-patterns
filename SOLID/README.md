# SOLID principles

## Single Responsibility

- A class/module/function should be responsible for a single part of functionality

## Open/Closed principle

- Open to extension but closed to modification
- if you need to add more functionality to a specific class, the ideal course of action is to extend the class through inheritance or composition instead of modifying it to add more methods or functions

## Liskov Substitution

- aka `substitutability`
- you should be able to use a subclass in place of its parent class

## Interface Segregation

- a class should not depend on methods that it does not need to implement

## Dependency Inversion

- your classes and modules should depend on abstractions instead of concrete implementations
