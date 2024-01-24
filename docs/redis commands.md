In the `redis-cli` command-line interface, you can use various commands to view data stored in Redis. Here are some commonly used commands:

1. **KEYS command:**
   The `KEYS` command is used to fetch all keys matching a specific pattern. Be cautious when using it in a production environment with a large number of keys, as it can be resource-intensive.

   ```bash
   redis-cli KEYS *
   ```

   This command will return all keys stored in the Redis database.

2. **SCAN command:**
   The `SCAN` command is a more recommended way to iterate over keys. It allows you to incrementally iterate over the keys without blocking the server.

   ```bash
   redis-cli SCAN 0
   ```

   The `SCAN` command returns a cursor, and you can use the returned cursor to fetch the next set of keys.

3. **GET command:**
   If you know the specific keys you want to inspect, you can use the `GET` command to retrieve the value associated with a key.

   ```bash
   redis-cli GET your_key
   ```

4. **HGETALL command:**
   If you are working with Hash data types, you can use the `HGETALL` command to get all fields and values of a hash.

   ```bash
   redis-cli HGETALL your_hash_key
   ```

5. **LRANGE command:**
   If you are working with Lists, you can use the `LRANGE` command to retrieve all elements in a list.

   ```bash
   redis-cli LRANGE your_list_key 0 -1
   ```

These are just a few examples. The exact commands you use will depend on the Redis data types and the structure of your data. It's important to note that using commands like `KEYS` in a production environment can have performance implications, so it's usually recommended to use `SCAN` and other more targeted commands.