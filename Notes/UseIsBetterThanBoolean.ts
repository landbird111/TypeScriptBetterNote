/**
 * ========================================
 * 這個範例是要說明，使用 is 比使用 boolean 好
 * ========================================
 */

type Species = "cat" | "dog" | "bird";

interface IPet {
    species: Species;
}

class Cat implements IPet {
    public species: Species = "cat";
    public meow(): void {
        console.log("Meow~");
    }

    public jump(): void {
        console.log("Jumping...");
    }

    public walk(): void {
        console.log("Walking...");
    }
}

function petIsCatBoolean(pet: IPet): boolean {
    return pet.species === "cat";
}

function petIsCat(pet: IPet): pet is Cat {
    return pet.species === "cat";
}

// 以上是基礎的定義，以下是使用範例

// ================================

// 使用多型的方式，來取得貓咪的物件
const pet: IPet = new Cat();

// 此時不可以使用pet.jump()，因為pet的型別是IPet，而IPet沒有jump()方法
// pet.jump(); // Error

// 使用petIsCatBoolean()，會回傳boolean
if (petIsCatBoolean(pet)) {
    // 如果petIsCatBoolean()回傳true，是不可以使用pet.jump()
    // 因為pet的推定型別是IPet，而IPet沒有jump()方法
    // pet.jump(); // Error

    // 雖然可以用as去指定類別，但每次使用就必須用as去指定類別，很麻煩
    (pet as Cat).jump();
    (pet as Cat).meow();
}

if (petIsCat(pet)) {
    // 如果petIsCat()回傳true，可以使用pet.jump()
    // 因為pet的推定型別是Cat，而Cat有jump()方法
    pet.jump();
    pet.meow();
}