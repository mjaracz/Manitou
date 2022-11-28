import { connectDb } from '../migrations-utils/connect-db';

export const up = async () => {
  const db = await connectDb();
  const storiesCollection = db.collection('stories');
  storiesCollection.createIndex({ author: 'text', title: 'text' });
  return storiesCollection.insertMany([
    {
      id: 0,
      author: 'author0',
      title: 'Titolo Loremo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut faucibus nisl, quis tincidunt metus. Nullam semper enim purus, quis tristique augue vulputate vel. Fusce at lorem sit amet lorem feugiat sodales. Nam varius libero ut scelerisque viverra. Ut nec ultricies diam. Curabitur augue diam, dapibus non velit at, venenatis congue ante. Etiam malesuada nibh at turpis fermentum, id porttitor elit tristique. In viverra odio sed tempus semper. Nulla gravida convallis vulputate. Sed quam leo, sagittis a purus at, maximus fringilla orci. Fusce commodo nibh in mi sollicitudin lobortis. Aliquam erat volutpat. Nunc tellus lectus, consectetur id libero vel, cursus fermentum odio.',
    },
    {
      id: 1,
      author: 'author1',
      title: 'Titolo Loremo 1',
      body: 'Aenean sapien sem, commodo nec fringilla non, suscipit nec est. Etiam ultrices ornare dapibus. Etiam tristique posuere finibus. Aliquam fermentum congue dignissim. Curabitur scelerisque urna odio, quis egestas leo suscipit et. Vestibulum rhoncus, velit et facilisis rutrum, nibh est placerat velit, id aliquet lacus orci ac tortor. Aenean pharetra porta nisi, et lobortis ex ultricies vitae. Nulla vel sagittis mauris. Vestibulum mi ipsum, vestibulum eget neque ut, condimentum euismod leo. Nullam id efficitur risus. Suspendisse id rhoncus neque. Suspendisse ut odio a nisi maximus feugiat non vel massa. Quisque pulvinar sed leo quis pharetra.',
    },
    {
      id: 2,
      author: 'author2',
      title: 'Titolo Loremo 2',
      body: 'Sed faucibus, felis vel tempus ornare, turpis erat posuere erat, sit amet ultricies diam mi nec tellus. Vivamus gravida eros ut enim ullamcorper, id rhoncus libero imperdiet. Cras urna dolor, tincidunt eu mauris nec, pharetra venenatis tellus. Proin dignissim est magna. Sed finibus tincidunt mauris, sodales scelerisque mauris rutrum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius magna a placerat mollis. Mauris pretium porta magna ut posuere. Donec lacinia urna aliquet, mollis enim vitae, dictum velit. Mauris pellentesque laoreet mi dignissim iaculis. Duis imperdiet eget libero a fringilla. Nullam ac ornare nisl, nec rutrum tortor. Vivamus sed urna nec eros vehicula molestie et et tellus. Phasellus nec metus vel sapien pulvinar ullamcorper vel id nisi. Vestibulum sed laoreet mauris.',
    },
    {
      id: 3,
      author: 'author2',
      title: 'Titolo Loremo 3',
      body: 'Proin suscipit venenatis nulla id dapibus. Sed luctus, ligula et auctor blandit, ipsum urna fermentum sapien, sed finibus magna erat in ligula. Nulla vehicula convallis ex eget faucibus. Integer in risus aliquet, euismod turpis rutrum, tincidunt est. Sed dictum, libero blandit volutpat ultricies, sapien tellus lacinia nisi, nec consectetur nisl metus eu eros. Fusce lobortis dolor vitae nunc pellentesque, in sodales mauris tristique. Maecenas pulvinar, magna vel consectetur consequat, sapien sem blandit arcu, sed molestie tellus mi at elit. Quisque ex nisl, placerat ac nisi vel, tempor commodo purus. Pellentesque luctus consectetur dapibus. Sed suscipit felis libero, eget gravida mi ornare scelerisque. Morbi aliquet est at auctor efficitur. Donec eu elementum sem, eu mollis odio. Sed euismod, leo nec ultrices pretium, elit lectus scelerisque massa, vel interdum dui odio et felis.',
    },
  ]);
  /*
   * Code your update script here!
   * */
};

export const down = async () => {
  const db = await connectDb();
  return db.collection('stories').deleteMany({});
  /*
   * Code your downgrade script here!
   * */
};
