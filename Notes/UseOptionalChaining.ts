/**
 * ==========================================
 * 這個範例是在指出安全的存取階層屬性或方法時，可以不用擔心會出現null或undefined的值
 * Optional Chaining
 * ==========================================
 */

const optionalUser = {
    name: "John",
    age: 18,
    address: {
        city: "Taipei",
        postalCode: "100-240",
    },
};

const postalCode = optionalUser.address?.postalCode;
console.log(postalCode); // 100-240

const invalidPostalCode = optionalUser.address?.postalCode?.substring(0, 3);
console.log(invalidPostalCode); // undefined
