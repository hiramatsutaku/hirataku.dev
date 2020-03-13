export interface PostFields {
  slug: string;
  title: string;
}

export default class PostEntity implements PostFields {
  readonly slug: string;
  readonly title: string;

  constructor({ slug, title }: PostFields) {
    this.slug = slug;
    this.title = title;
  }
}
