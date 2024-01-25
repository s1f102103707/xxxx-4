/* eslint-disable */
export type Methods = {
  /** Creates a new task with the given details. */
  post: {
    status: 201

    /** Task created successfully */
    resBody: {
      /** Unique identifier for the created task */
      id: string
      /** Title of the created task */
      title: string
      /** Content of the created task */
      content: string
    }

    /** Task data to create a new task */
    reqBody: {
      /** Title of the task */
      title: string
      /** Content of the task */
      content: string
    }
  }
}
