import {NextApiRequest, NextApiResponse} from 'next';

// Three endpoints:
  // -  GET /api/todo
  // -  POST /api/todo
  // -  PATCH /api/todo/:id
  
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  // get id
  const id: string | undefined = req.query.id?.[0];
  console.log(`${req.method} ${req.url}`);

  /////////////////////////
  ///   GET /api/todo   ///
  /////////////////////////
  if (!id && req.method === 'GET') {
    //  select Todo {
    //    id,
    //    title,
    //    completed
    //  };
    return res.status(200).json([
      {id: 'aaa', title: 'Introduce the event', completed: false},
      {id: 'bbb', title: 'Do live demo', completed: false},
      {id: 'ccc', title: 'Give ORMs talk', completed: false},
    ]);
  }

  //////////////////////////
  ///   POST /api/todo   ///
  //////////////////////////
  // req.body { title: string }
  if (!id && req.method === 'POST') {
    //  insert Task {
    //    title := <str>$title
    //  };
    return res.status(500).send('Not implemented!');
  }

  //////////////////////////////
  //   PATCH /api/todo/:id   ///
  //////////////////////////////
  // req.query { id: string }
  if (req.method === 'PATCH' && !!id) {
    //  update Todo
    //  filter .id = req.query.id
    //  set { completed := not .completed };
    return res.status(500).send('Not implemented!');
  }

  return res.status(400).send('Invalid request');
};

export default handler;
