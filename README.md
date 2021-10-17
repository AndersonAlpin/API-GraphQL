## What is GraphQL?

GraphQL is a server-oriented query and execution environment for application programming interfaces (APIs) whose priority is to provide exactly the data that clients request and nothing more.
<br>
<a href="https://graphql.org/" target="_blank">GraphQL</a>

## API Description

In this API we have a CRUD of users and posts using MongoDB database.

## Instructions

1. Install dependencies with <i>yarn install</i>
2. Run application with <i>yarn dev</i>
3. Access the server at http://localhost:4000

## Examples

### Mutation
#### Create user
```
mutation createUser {
  createUser (userInput: {
    firstName: "Sofia"
    lastName: "Oliveira"
    email: "sofia@gmail.com"
    active: true
  }) {
    _id
    firstName
  }
}
```
#### Response
```
{
  "data": {
    "createUser": {
      "_id": "616c35bb1f60d618464c8d96",
      "firstName": "Sofia"
    }
  }
}
```
#### Create post
```
mutation createPost {
  createPost(postInput: {
    title: "Lorem"
    content: "Lore ipsum sit amet, dolor."
    author: "616c35bb1f60d618464c8d96"
  }) {
    _id
    title
  }
}
```
#### Response
```
{
  "data": {
    "createPost": {
      "_id": "616c36661f60d618464c8d98",
      "title": "Lorem"
    }
  }
}
```

### Query

#### Return all users
```
query getUsers {
  users {
    firstName
    email
  }
}
```

#### Response
```
{
  "data": {
    "users": [
      {
        "firstName": "Juliana",
        "email": "juliana@gmail.com"
      },
      {
        "firstName": "Rafael",
        "email": "rafael@gmail.com"
      }
    ]
  }
}
```

#### Return a specific user
```
query getUser {
  user(id: "616b1e70b3a795f1c51e1002") {
    fullName
  }
}
```

#### Response
```
{
  "data": {
    "user": {
      "fullName": "Juliana Santos"
    }
  }
}
```

#### Return all posts
```
query getPosts {
  posts {
    title
    author {
      fullName
    }
  }
}
```

#### Response
```
{
  "data": {
    "posts": [
      {
        "title": "Lorem",
        "author": {
          "fullName": "Juliana Santos"
        }
      }
    ]
  }
}
```

#### Delete a user
```
mutation deleteUser {
  deleteUser(id: "616b1e70b3a795f1c51e1002")
}
```

#### Response
```
{
  "data": {
    "deleteUser": true
  }
}
```
