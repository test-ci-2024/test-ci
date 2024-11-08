import path from "path";
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

import { devEnv } from "./dev.environment";
import { prodEnv } from "./prod.environment";
import { TestEnvironment } from "./types/environment.type";

const environments: Record<string, TestEnvironment> = {
    'DEV': devEnv,
    'PROD': prodEnv
}

export const testEnv: TestEnvironment = environments[process.env.ENV] ?? environments['DEV'];