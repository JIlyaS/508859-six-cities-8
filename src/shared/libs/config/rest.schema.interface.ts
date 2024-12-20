export interface IRestSchema {
    PORT: number;
    SALT: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_PORT: string;
    DB_NAME: string;
    UPLOAD_DIRECTORY: string;
    JWT_SECRET: string;
    JWT_EXPIRED: string;
    HOST: string;
    STATIC_DIRECTORY_PATH: string;
}
