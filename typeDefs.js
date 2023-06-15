import { gql } from 'apollo-server-express';
const typeDefs = gql`
    type Query{
        users: [User]
        messagesByUser(receiverId:Int!):[Message]
        currentUser: User
    }
    input UserInput{
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    input UserSigninInput{
        email: String!
        password: String!
    }
    scalar Date
    type Message{
        id: Int!
        text: String!
        receiverId: Int!
        senderId: Int!
        createdAt: Date!
    }
    type Mutation{
        signupUser(userNew: UserInput!):User
        signinUser(userSignin: UserSigninInput!):Token
        createMessage(receiverId:Int!, text:String!):Message
    }
    type Token{
        token:String!
    }
    type User{
        id:ID!
        firstName:String!
        lastName:String!
        email:String!
    } 
    type Subscription {
        messageAdded : Message
    }
`

export default typeDefs