/**
 * ==============================================
 * 這個範例示範如何使用自訂錯誤
 * ==============================================
 */

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}

try {
    // ... 這裡可以放一些可能會發生錯誤的程式碼
} catch (error) {
    throw new CustomError('自訂錯誤');
}