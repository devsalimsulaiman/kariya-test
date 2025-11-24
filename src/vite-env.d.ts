/// <reference types="vite/client" />

interface Image {
  src: string;
}

// This covers ALL image types
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.webp";
declare module "*.gif";
