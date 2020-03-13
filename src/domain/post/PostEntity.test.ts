import { PostEntity } from './PostEntity';

describe('PostEntity', () => {
  test('create instance', () => {
    const slug = 'hogehoge';
    const title = 'title';
    const instance = new PostEntity({ slug, title });
    expect(instance).toEqual({
      slug,
      title,
    });
  });
});
