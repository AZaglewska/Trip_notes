1. Create CRUD endpoints that operates on in-memory array of objects.
Endpoints:
   1. `GET /movies` - returns all elements
   2. `GET /movies/:id` returns one element with given id
   3. `POST /movies` - adds new element (`req.body` will be undefined at start - needs body-parser)
   4. `PUT /movies/:id` - updates move with given id
   5. `DELETE /movies/:id` removes movie with given id


2. Store data in `movies` array in code:

```
const movies = [];
```

3. Use interface for `movies` array. Example schema:
```
{
    id: number;
    title: string;
    genres: string[]
}
```

