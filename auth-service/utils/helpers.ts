import cryptoJS from "crypto-js";

export const crypto = (message: string, key: string) => {
    const encryptedKey = cryptoJS.HmacSHA1(message, key);
    return cryptoJS.enc.Base64.stringify(encryptedKey);
};