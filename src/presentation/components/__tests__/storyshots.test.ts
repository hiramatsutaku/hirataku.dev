import initStoryshots from '@storybook/addon-storyshots';
import { styleSheetSerializer } from 'jest-styled-components/serializer';

expect.addSnapshotSerializer(styleSheetSerializer);

initStoryshots({});
