import { mock, release } from 'mock-async-storage';
mock();
import Cache from './cache';
const KEY = 'test_key_0';
const KEY1 = 'test_key_1';
const KEY2 = 'test_key_2';
const VAL = 5;
const VAL1 = 7;
const VAL2 = 9;


describe('Cache', () => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 5;

    it('should *SET & GET* data in/from AsyncStorage', async () => {
        await Cache.set(KEY, VAL, 1);
        const value = await Cache.get(KEY);
        expect(value).toBe(VAL);

        const getExpired = (t) => {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    const expiredValue = await Cache.get(KEY);
                    resolve(expiredValue === null);
                }, t);
            });
        };

        let v = await getExpired(500);
        expect(v).toBe(false);
        v = await getExpired(2000);
        expect(v).toBe(true);
    });

    it('should *REMOVE* data from AsyncStorage', async () => {
        await Cache.set(KEY, VAL, 100);
        const value1 = await Cache.get(KEY);
        expect(value1).toBe(VAL);
        const value = await Cache.remove(KEY);
        expect(value).toBe(null);
    });

    it('should *MULTI_SET & MULTI_GET* data in/from AsyncStorage',  () => {
        return Cache.multiSet({
            [KEY1]: VAL1,
            [KEY2]: VAL2
        }).then(() => {
            return Cache.multiGet([KEY1, KEY2]).then((values) => {
                expect(values[KEY1]).toBe(VAL1);
                expect(values[KEY2]).toBe(VAL2);
            });
        });
    });

    it('should *MULTI_REMOVE* data from AsyncStorage',  () => {
        return Cache.multiSet({
            [KEY1]: VAL1,
            [KEY2]: VAL2
        }).then(() => {
            return Cache.multiRemove([KEY1, KEY2]).then((res) => {
                expect(res).toBe(null);
            });
        });
    });

    it('should *FLUSH* data from AsyncStorage',  async () => {
        return Cache.multiSet({
            [KEY1]: VAL1,
            [KEY2]: VAL2
        }).then(() => {
            return Cache.multiGet([KEY1, KEY2]).then(async (values) => {
                expect(values[KEY1]).toBe(VAL1);
                expect(values[KEY2]).toBe(VAL2);
                const res = await Cache.flush();
                expect(res).toBe(null);
            });
        });

    });

    it('check *IS_EXPIRED* with positive value data from AsyncStorage',  async () => {
        await Cache.set(KEY, VAL, 1);
        const res = await Cache.isExpired(KEY);
        expect(res).toBe(false);

        const getExpired = () => {
            return new Promise((resolve, reject) => {
                setTimeout(async () => {
                    const expiredValue = await Cache.get(KEY);
                    if ( expiredValue === null ) resolve(true);
                    else reject(false);
                }, 2000);
            });
        };

        const res2 = await getExpired();
        expect(res2).toBe(true);
    });

    it('check *IS_EXPIRED* with negative data from AsyncStorage',  async () => {
        await Cache.set(KEY, VAL, -100);
        const res = await Cache.isExpired(KEY);
        expect(res).toBe(true);
    });

    it('should *GET_ALL_KEYS* data from AsyncStorage',  async () => {
        await Cache.flush();
        await Cache.multiSet({[KEY1]: VAL1, [KEY2]: VAL2});
        const res = await Cache.getAllKeys();
        expect(JSON.stringify(res)).toBe(JSON.stringify([KEY1,KEY2]));
    });

    it('should *CLEAR_DEPRECATED* data from AsyncStorage',  async () => {
        await Cache.set(KEY, VAL, 1);
        const value = await Cache.get(KEY);
        expect(value).toBe(VAL);

        const getExpired = () => {
            return new Promise((resolve, reject) => {
                setTimeout(async () => {
                    const expiredValue = await Cache.get(KEY);
                    if ( expiredValue === null ) resolve(true);
                    else reject(false);
                }, 2000);
            });
        };

        const res2 = await getExpired();
        expect(res2).toBe(true);
    });

});
