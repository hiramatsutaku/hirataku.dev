import { PostEntity } from './PostEntity';

describe('PostEntity', () => {
  test('create instance', () => {
    const date = '20200315';
    const title = 'title';
    const instance = new PostEntity({ date, title });
    expect(instance).toEqual({
      date,
      title,
    });
  });
});
