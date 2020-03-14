export interface PostFields {
  date: string;
  title: string;
}

export class PostEntity implements PostFields {
  readonly date: string;
  readonly title: string;

  constructor({ date, title }: PostFields) {
    this.date = date;
    this.title = title;
  }
}
