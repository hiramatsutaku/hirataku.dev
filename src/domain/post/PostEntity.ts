export interface PostFields {
  slug: string;
  title: string;
  body: string;
}

export default class PostEntity {
  readonly slug: string;
  readonly title: string;

  constructor({ slug, title }: { slug: string; title: string }) {
    this.slug = slug;
    this.title = title;
  }
}
