1. Opcjonalne - przenieść implementancje z `movies.router` do `movies.controller`.
2. `PUT /:id` - sprawdzić, czy `id` w req.params jest takie samo jak w req.body. Jeśli nie, to zwrócić błąd HTTP 400 - Bad request.
3. `DELETE /:id` - przed usunięciem sprawdzić czy dany element istnieje w bazie (naszej tablicy). Jeśli nie, zwrócić HTTP 404 Not Found.
4. [Opcjonalne] - wykorzystać paczkę `http-errors` (już zainstalowana, przykład użycia w app.ts) do zwracania błędów z 2. i 3.

Na następny raz:
Walidacja danych (req.body) za pomocą bibliotek.
