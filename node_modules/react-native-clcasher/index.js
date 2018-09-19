import MemoryCache from './MemoryCache';

let _clearDeprecated = async () => {

    try {
        let keys = await MemoryCache.getAllKeys();
        await MemoryCache.multiGet(keys);
    } catch ( err ) {
        return {error: err};
    }
};

setInterval(() => {
    _clearDeprecated();
}, 1000);

export default MemoryCache;