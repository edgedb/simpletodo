import {createClient} from 'edgedb';
import {NextApiRequest, NextApiResponse} from 'next';

import e from '../../../dbschema/edgeql-js';

const client = createClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Three endpoints:
  //   GET /api/todo
  //   POST /api/todo
  //   PATCH /api/todo/:id

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
    const query = e.select(e.Todo, (todo) => ({
      id: true,
      title: true,
      completed: true,
    }));
    const result = await query.run(client);
    return res.status(200).json(result);
  }

  //////////////////////////
  ///   POST /api/todo   ///
  //////////////////////////
  // req.body { title: string }
  if (!id && req.method === 'POST') {
    //  insert Task {
    //    title := <str>$title
    //  };
    const query = e.insert(e.Todo, {
      title: req.body.title as string,
    });

    await query.run(client);

    return res.status(200).send('Success');
  }

  //////////////////////////////
  //   PATCH /api/todo/:id   ///
  //////////////////////////////
  // req.query { id: string }
  if (req.method === 'PATCH' && !!id) {
    //  update Todo
    //  filter .id = req.query.id
    //  set { completed := not .completed };
    const query = e.update(e.Todo, (todo) => ({
      filter: e.op(todo.id, '=', e.uuid(id)),
      set: {
        completed: e.op('not', todo.completed),
      },
    }));
    await query.run(client);
    return res.status(200).send('Success');
  }

  return res.status(400).send('Invalid request');
};

export default handler;
