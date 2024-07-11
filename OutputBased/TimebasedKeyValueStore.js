class TimeBasedKVStore {
  constructor() {
    this.store = new Map();
  }

  set(key, value, ttl) {
    const expiresAt = Date.now() + ttl;
    this.store.set(key, { value, expiresAt });

  /*   // Automatically remove the key after the TTL
    setTimeout(() => {
      // Check if the key is still in the store and hasn't been updated
      if (this.store.has(key) && this.store.get(key).expiresAt === expiresAt) {
        this.store.delete(key);
      }
    }, ttl); */
  }

  get(key) {
    const entry = this.store.get(key);
    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return entry.value;
  }

  delete(key) {
    this.store.delete(key);
  }
}

// Example usage
const kvStore = new TimeBasedKVStore();

kvStore.set('a', 1, 2000); // Set key 'a' with value 1 that expires in 2 seconds
console.log(kvStore.get('a')); // Output: 1

setTimeout(() => {
  console.log(kvStore.get('a')); // Output: null (after 2 seconds)
}, 3000);

kvStore.set('b', 2, 5000); // Set key 'b' with value 2 that expires in 5 seconds
console.log(kvStore.get('b')); // Output: 2

setTimeout(() => {
  console.log(kvStore.get('b')); // Output: null (after 5 seconds)
}, 6000);
