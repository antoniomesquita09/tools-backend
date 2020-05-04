const { gql } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const mongoose = require('mongoose');
const server = require('../../app');

const GET_AUTHORS = gql`
    query{
        getAuthors{
            name
            email
            github
        }
    }
`;
const CREATE_AUTHOR = gql`
    mutation createAuthor{
        createAuthor(
            name: "test"
            github: "teste.github"
            email: "email@test.com"
            ){
            name
            email
            github
        }
    }
`;
const UPDATE_AUTHOR = gql`
    mutation updateAuthor{
        updateAuthor(
            name: "test"
            github: "teste.github"
            email: "email@test.com"
            ){
            name
            email
            github
        }
    }
`;
const DELETE_AUTHOR = gql`
    mutation deleteAuthor($id: ID){
        deleteAuthor(
            id: $id
            ){
            name
            email
        }
    }
`;

const { query, mutate } = createTestClient(server);

describe('Testing Author resolver', () => {
  afterAll(async (done) => {
    await mongoose.connection.close();
    done();
  });
  it('Should mutate a new author', async () => {
    const { data } = await mutate({
      mutation: CREATE_AUTHOR,
    });

    expect(data).toMatchSnapshot();
  });
  it('Should query a list of authors', async () => {
    const { data } = await query({
      query: GET_AUTHORS,
    });

    expect(data).toMatchSnapshot();
  });
  it('Should not pass mutation update author without an ID', async () => {
    const { data } = await mutate({
      mutation: UPDATE_AUTHOR,
    });

    expect(data).toBeFalsy();
  });
  it('Should create and delete an author', async () => {
    const { data: { id } } = await mutate({
      mutation: CREATE_AUTHOR,
    });
    const { data } = await mutate({
      mutation: DELETE_AUTHOR,
      variables: {
        id,
      },
    });

    expect(data).toBeFalsy();
  });
});
