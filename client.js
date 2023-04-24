import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'j2bxdvs7', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-03-25', // use a UTC date string
});
