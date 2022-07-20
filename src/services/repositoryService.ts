import instance from "./axiosInstance"

export const getRepositories = async () => {
  const response = await instance.post("", {
    query: `
        {
            search(query: "is:public", type: REPOSITORY, first: 50) {
              repositoryCount
              pageInfo {
                endCursor
                startCursor
              }
              edges {
                node {
                  ... on Repository {
                    name
                    stargazerCount
                    forkCount
                    url
                  }
                }
              }
            }
          }
        `,
  });
  const { data } = response;
  const { search } = data.data;
  return search;
};

