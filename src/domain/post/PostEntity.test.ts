import PostEntity from './PostEntity';

describe('create instance', () => {
  test('success', () => {
    const slug = 'hogehoge';
    const title = 'title';
    const instance = new PostEntity({ slug, title });
    expect(instance).toEqual({
      slug,
      title,
    });
  });
});
