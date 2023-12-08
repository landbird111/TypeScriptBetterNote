/**
 * ==============================
 * 這個範例說明如何使用 Satisfies 來檢查型別是否符合某個介面
 * (注意: 此語法需要 TypeScript 4.9 以上)
 * ==============================
 */

// Satisfies的中文意思是滿足，這個語法可以檢查某個型別是否符合某個介面

interface ICustomImage {
    data: string;
    width: number;
    height: number;
}

// 建立一個類別，並且實作ICustomImage介面
const myCustomImage: ICustomImage = {
    data: "base64",
    width: 100,
    height: 100,
};

// 假設有一個使用者的Type，是符合ICustomImage或字串的
// 像是有圖片時就是ICustomImage，沒有圖片時就是字串
type UserImage = ICustomImage | string;

// 使用者介面
interface IImageUser {
    id: number;
    name: string;
    image: UserImage;
}

// 以上是基礎的定義，以下是使用範例

// ================================

// 不使用Satisfies的情況
const BadUser: IImageUser = {
    id: 1,
    name: "John",
    image: "Image-Url",
};

// 沒有提示，因為BadUser.image的型別是UserImage，而UserImage是ICustomImage或字串
// BadUser.image; // string | ICustomImage

// ================================

// 使用Satisfies的情況, 但是使用者的圖片是字串
const GoodUserByString = {
    id: 1,
    name: "John",
    image: "Image-Url",
} satisfies IImageUser;

// GoodUserByString.image.length; // OK

// ================================

// 使用Satisfies的情況, 但是使用者的圖片是ICustomImage
const GoodUserByImage = {
    id: 1,
    name: "John",
    image: myCustomImage,
} satisfies IImageUser;

// GoodUserByImage.image.data; // OK

// ================================