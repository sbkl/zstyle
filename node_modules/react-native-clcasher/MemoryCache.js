// import React, {Component} from 'react';
import {AsyncStorage, Platform} from 'react-native';

const PREFIX = 'react-native-cacher:values:';
const DEFAULT_EXPIRES = 999999;

function b64EncodeUnicode(str) {
     if (Platform.OS === 'android') {
            return encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode('0x' + p1);
            })
     }
     return str;
}

function b64DecodeUnicode(str) {
     if (Platform.OS === 'android'){
        return decodeURIComponent(Array.prototype.map.call(str, function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
     }
     return str;
}

function currentTime(){
    return Math.floor((new Date().getTime() / 1000));
}

let MemoryCache = {};

MemoryCache.set = async (key, value, expires = DEFAULT_EXPIRES) => {
    const k = PREFIX + key;
    const storageValue = {
        value: value,
        expires: currentTime() + parseInt(expires)
    };

    try {
        await AsyncStorage.setItem(k, b64EncodeUnicode(JSON.stringify(storageValue)));
        return null;
    } catch ( err ) {
        return {error: err};
    }

};

MemoryCache.get = async (key) => {

    const k = PREFIX + key,
    curTime = currentTime();

    try {
        let v = await AsyncStorage.getItem(k);

        v = v ? JSON.parse((Platform.OS == 'android') ?  b64DecodeUnicode(v) : v) : null;

        if ( v && v.expires && v.expires >= curTime ) {
            return v.value;
        } else {
            await AsyncStorage.removeItem(k);
        }
    } catch ( err ) {
        return {error: err};
    }

    return null;
};

MemoryCache.remove = async (key) => {
    const k = PREFIX + key;
    try {
        await AsyncStorage.removeItem(k);
        return null;
    } catch (err) {
        return {error: err};
    }
};

MemoryCache.multiGet = (keys) => {
    return new Promise((resolve, reject) => {
        let counter = 0, result = {};
        for ( let key of keys ) {
            MemoryCache.get(key).then((value) => {
                result[key] = value;
                if ( ++counter == keys.length ) {
                    resolve(result);
                }
            }).catch(() => {
                result[key] = null;
                if ( ++counter == keys.length ) {
                    resolve(result);
                }
            });
        }
    });
};

MemoryCache.multiSet = (values, expires = DEFAULT_EXPIRES) => {
    return new Promise((resolve, reject) => {
        let counter = 0, length = Object.keys(values).length;
        for ( let key in values ) {
            MemoryCache.set(key, values[key], expires).then(() => {
                if ( ++counter == length ) {
                    resolve(null);
                }
            }).catch(err => reject({error: err}));
        }
    });
};

MemoryCache.multiRemove = (keys) => {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for ( let key of keys ) {
            MemoryCache.remove(key).then(() => {
                if ( ++counter == keys.length ) {
                    resolve(null);
                }
            }).catch(err => reject({error: err}));
        }
    });
};


MemoryCache.flush = async () => {
    try {
        let keys = await MemoryCache.getAllKeys();
        return await MemoryCache.multiRemove(keys);
    } catch ( err ) {
        return {error: err};
    }
};

MemoryCache.isExpired = async (key) => {

    const k = PREFIX + key;

    try {
        let v = await AsyncStorage.getItem(k);
        v = JSON.parse(v && (Platform.OS == 'android') ?  b64DecodeUnicode(v) : v);
        return ( ! v.expires ) || ( v.expires < currentTime());
    } catch ( err ) {
        return {error: err};
    }

};

MemoryCache.getAllKeys = async () => {
    try {
        let keys = await AsyncStorage.getAllKeys();
        let tmpKeys = [];
        for (let key of keys) {
            if (key.match(PREFIX) !== null) {
                key = key.replace(PREFIX, '');
                tmpKeys.push(key);
            }
        }
        return tmpKeys;
    } catch ( err ) {
        return {error: err};
    }
};

MemoryCache.getAllValues = () => MemoryCache.getAllKeys()
    .then((all) => all.reduce((prev, next) => {
        AsyncStorage.getItem(PREFIX + next).then(item => prev[next] = item);
        return prev;
}, {}));

export default MemoryCache;