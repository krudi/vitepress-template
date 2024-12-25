export interface Frontmatter {
    head?: Array<[string, Record<string, string>]>;
    description?: string;
    keywords?: string;
    title?: string;
    lang?: string;
    [key: string]: string | Array<[string, Record<string, string>]> | undefined;
}

export interface PageData {
    frontmatter: Frontmatter;
}
