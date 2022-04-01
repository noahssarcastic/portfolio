import { Schema, model } from 'mongoose'

interface Post {
  title: string
  body: string
}

const schema = new Schema<Post>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
)

export default model<Post>('Post', schema)
