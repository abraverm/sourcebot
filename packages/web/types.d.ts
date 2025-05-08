declare module '*.txt' {
    const content: string;
    export default content;
}

declare module 'uuid' {
    export function v4(): string;
}
