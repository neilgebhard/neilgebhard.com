import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    },
    tags: {
      type: 'string',
      description: 'A list of description tags',
      required: false
    }
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
})
