import { Model } from "mongoose";

export type TCat = {
    id: number;
    name: string;
    age: number;
    color?: string;
    secret?: string;
};

export type TCatMethods = {
    generateId(): Promise<void>
}

export type CatModel = Model<TCat, Record<string, never>, TCatMethods>