/**
 * ==========================================
 * Use Key Remapping
 * ==========================================
 */

// 這個是可以利用 key remapping 來達到更好的程式碼可讀性

type PrefixKeys<T, P extends string> = {
    [K in keyof T as `${P}${K & string}`]: T[K];
};

type PrefixedPerson = PrefixKeys<{ name: string; age: number }, "user_">;

const prefixPerson: PrefixedPerson = {
    user_name: "John",
    user_age: 30,
};

type PreMusic = PrefixKeys<{ title: string; duration: number }, "music_">;
const prefixMusic: PreMusic = {
    music_title: "Hello",
    music_duration: 300,
};
