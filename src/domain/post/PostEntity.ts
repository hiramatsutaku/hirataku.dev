export interface PostFields {
  slug: string;
  title: string;
  body: string;
}

export default class PostEntity {
  readonly slug: string;
  readonly title: string;
  readonly body: string;

  constructor({ slug, title, body }: { slug: string; title: string; body: string }) {
    this.slug = slug;
    this.title = title;
    this.body = body;
  }
}
