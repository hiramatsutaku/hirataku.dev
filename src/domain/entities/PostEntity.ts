export interface PostFields {
  title: string;
}

export default class Post {
  readonly title: string;

  constructor({ title }: { title: string }) {
    this.title = title;
  }
}
