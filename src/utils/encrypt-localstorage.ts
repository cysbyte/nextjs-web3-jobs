"use client";
import CryptoJS from "crypto-js";

const secretKey = "key2966fortokenpersistinlocalstorage";

export const getDecryptedAccessToken = () => {
  if (typeof window === "undefined" || !window.localStorage) return;
  const item = localStorage.getItem("accessToken") as string;
  if (!item || item === "") return "";
  const decryptedAccessToken = CryptoJS.AES.decrypt(item, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return decryptedAccessToken as string;
};
export const getDecryptedUserId = () => {
  if (typeof window === "undefined" || !window.localStorage) return;
  const item = localStorage.getItem("userId") as string;
  if (!item || item === "") return "";
  const decryptedUserId = CryptoJS.AES.decrypt(item, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return decryptedUserId as string;
};
export const getDecryptedEmail = () => {
  if (typeof window === "undefined" || !window.localStorage) return;
  const item = localStorage.getItem("email") as string;
  if (!item || item === "") return "";
  const decryptedEmail = CryptoJS.AES.decrypt(item, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return decryptedEmail as string;
};
export const getDecryptedFirstName = () => {
  if (typeof window === "undefined" || !window.localStorage) return;
  const item = localStorage.getItem("firstname") as string;
  if (!item || item === "") return "";
  const decryptedFirstName = CryptoJS.AES.decrypt(item, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return decryptedFirstName as string;
};
export const getDecryptedLastName = () => {
  if (typeof window === "undefined" || !window.localStorage) return;
  const item = localStorage.getItem("lastname") as string;
  if (!item || item === "") return "";
  const decryptedLastName = CryptoJS.AES.decrypt(item, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return decryptedLastName as string;
};

export const setEncryptedItems = ({
  accessToken,
  userId,
  email,
  firstname,
  lastname,
}: {
  accessToken: string;
    userId: string;
    email: string;
  firstname: string;
    lastname: string;
  }) => {
  if (typeof window === "undefined" || !window.localStorage) return;
  
  if (!accessToken || accessToken === "") return;
  const encryptedAccessToken = CryptoJS.AES.encrypt(
    accessToken,
    secretKey
  ).toString();

  if (!userId || userId === "") return;
  const encryptedUserId = CryptoJS.AES.encrypt(userId, secretKey).toString();

  if (!email || email === "") return;
  const encryptedEmail = CryptoJS.AES.encrypt(email, secretKey).toString();

  if (!firstname || firstname === "") return;
  const encryptedFirstName = CryptoJS.AES.encrypt(
    firstname,
    secretKey
  ).toString();

  if (!lastname || lastname === "") return;
  const encryptedLastName = CryptoJS.AES.encrypt(
    lastname,
    secretKey
  ).toString();

  localStorage.setItem("accessToken", encryptedAccessToken);
  localStorage.setItem("userId", encryptedUserId);
  localStorage.setItem('email', encryptedEmail);
  localStorage.setItem("firstname", encryptedFirstName);
  localStorage.setItem("lastname", encryptedLastName);
};

export const clearEncryptedItems = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
  localStorage.removeItem('email');
  localStorage.removeItem("firstname");
  localStorage.removeItem("lastname");
};
