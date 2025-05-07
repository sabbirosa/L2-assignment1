# TypeScript and Our Next Level Development Journey

## Table of Contents

- [Introduction](#introduction)
- [1. Differences Between Interfaces and Types](#1-differences-between-interfaces-and-types)
  - [The Basics](#the-basics)
  - [Declaration Merging](#declaration-merging)
  - [Extending vs Intersection](#extending-vs-intersection)
  - [Advanced Type Features](#advanced-type-features)
- [2. How TypeScript Improves Code Quality and Maintainability](#2-how-typescript-improves-code-quality-and-maintainability)
  - [Catching Errors Early](#catching-errors-early)
  - [Self-Documenting Code](#self-documenting-code)
  - [Better Developer Experience](#better-developer-experience)
  - [Safer Code Changes](#safer-code-changes)
- [Conclusion](#conclusion)

## Introduction

As we are starting our next level journey, we can't afford to get undefined errors in production. That's where TypeScript comes in. TypeScript is a powerful tool that helps us write more reliable JavaScript code.

## What are some differences between interfaces and types in TypeScript?

Both interfaces and types allow us to define shapes for our data in TypeScript, but they have important differences that affect how we use them. Understanding these differences helps us to make better decisions when structuring our code.

### The Basics

Let's start with a simple example that shows how both can define an object shape:

```typescript
// Using interface
interface User1 {
  id: number;
  name: string;
  email: string;
}

// Using type
type User2 = {
  id: number;
  name: string;
  email: string;
};

// Both can be used the same way
const newUser1: User1 = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

const newUser2: User2 = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};
```

While they look similar here, they have key differences when we use them in more complex scenarios.

### Declaration Merging

One major difference is that interfaces support declaration merging, while types don't.

```typescript
// Interface merging - this works!
interface User {
  id: number;
}

interface User {
  name: string;
}

const newUser: User = {
  id: 1,
  name: "John Doe",
};
```

The two interfaces above combine to become:

```typescript
interface User {
  id: number;
  name: string;
}
```

Types cannot be merged this way. If we want to use that way it will give us an error.

```typescript
type User = {
  id: number;
};

type User = {
  name: string;
};

const newUser: User = {
  id: 1,
  name: "John Doe",
};

// Output: SyntaxError: Identifier 'User' has already been declared. (5:5)
```

This feature makes interfaces particularly useful when:

- Working with library definition files
- Adding properties to global objects
- Creating API definitions that might need to expand later

### Extending vs Intersection

Both interfaces and types can build on existing types, but they use different approaches:

```typescript
// Extending interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

// Extending types
type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = PersonType & {
  employeeId: string;
  department: string;
};
```

### Advanced Type Features

Types can be represented more than just object shapes:

```typescript
// Primitive type alias
type ID = string | number;

// Union types
type Status = "pending" | "approved" | "rejected";

// Tuple types
type Coordinates = [number, number];
```

Interfaces cannot do these directly. Types are more versatile when it comes to representing various kinds of types beyond object shapes.
