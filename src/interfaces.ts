import { Rule, RuleReturn } from "./types.ts";

export interface ValidationRules {
  [key: string]: Rule | Rule[];
}

export interface InvalidParams {
  [key: string]: any;
}

export interface InvalidPayload {
  rule: string;
  params: InvalidParams;
  implicit: boolean;
}

export interface InputData {
  [key: string]: any;
}

export interface ValidationMessages {
  [key: string]: string;
}

export interface ValidationAttributes {
  [key: string]: string;
}

export interface ValidationErrors {
  [key: string]: {
    [ruleName: string]: string | ValidationErrors;
  };
}

export interface RawValidationResult {
  [key: string]: InvalidPayload[] | RawValidationResult | RawValidationResult[];
}

export interface ValidationOptions {
  messages?: ValidationMessages;
  attributes?: ValidationAttributes;
}

export interface FirstMessages {
  [key: string]: string | FirstMessages;
}

export interface FlattenMessages {
  [key: string]: string;
}
