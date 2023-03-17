import { gql } from "@apollo/client";

export const TUTOR_MUTATIONS = gql`
    type Mutation {
        addTutor(username: String!, email: String!, password: String!): Tutor
    }

`