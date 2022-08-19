import React from 'react'
import { Layout, ModuleDetail, QueryResult } from '../components'
import { gql, useQuery } from '@apollo/client'

const MODULE = gql`
query Module($moduleId: ID!) {
  module(id: $moduleId) {
    id
    title
    length
    trackId
    authorId
    topic
    content
    videoUrl
    track {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
        trackId
        authorId
        topic
        content
        videoUrl
      }
    }
  }
}
`

const Module = ({ moduleId }) => {

    const { loading, error, data } = useQuery(MODULE, {
        variables: {
            moduleId
        }
    })
    console.log(data)
    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={data}>
                <ModuleDetail track={data?.module?.track} module={data} />
            </QueryResult>
        </Layout>
    )
}

export default Module