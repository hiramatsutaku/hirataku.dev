export interface PostFields {
  slug: string;
  title: string;
}

export class PostEntity implements PostFields {
  readonly slug: string;
  readonly title: string;

  constructor({ slug, title }: PostFields) {
    this.slug = slug;
    this.title = title;
  }
}
