/** Conventional commits Type */
export interface ConventionalCommitType {
    name: string;
    desc?: string;
    emoji?: string;
}

/** Coco config */
export interface Config {
    types: ConventionalCommitType[];
    useEmoji: boolean;
    scopes?: string[];
}

/** Represents a string value that can be valid or invalid */
export interface ValidatedValue {
    value: string;
    isValid: boolean;
}
