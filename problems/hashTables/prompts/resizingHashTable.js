/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

const makeHashTable = () => {
  const result = {};
  const storage = [];

  let storageLimit = 4;
  let size = 0;

  result.insert = (key, value) => {
    // TODO: implement `insert`
    let previous = undefined;
    if (result.hasItem(key)) {
        previous = this.items[key];
    }
    else {
        this.length++;
    }
    this.items[key] = value;
    return previous;
    
    // let index = getIndexBelowMaxForKey(key, storageLimit);

    // let bucket = storage.get(index) || [];

    // for (let i = 0; i < bucket.length; i++) {
    //   let tuple = bucket[i];
    //   if (tuple[0] === key) {
    //     let oldValue = tuple[1];
    //     tuple[1] = value;
    //     return oldValue;
    //   }
    // }

    // bucket = [...bucket, [key, value]];
    // storage.set(index, bucket);
    // size++;

    // if (size > storageLimit * 0.75) {
    //   resize(storageLimit * 2);
    // }

    // return undefined;
    
  };
  
  
  
  result.hasItem = (key) => {
    return 
  };

  result.retrieve = () => {
    // TODO: implement `retrieve`
    // Check size, if 1/4 full, resize
  };

  result.remove = () => {
    // TODO: implement `remove`
  };
  
  result.resize = () => {
    // TODO: implement `remove`
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = { makeHashTable };
