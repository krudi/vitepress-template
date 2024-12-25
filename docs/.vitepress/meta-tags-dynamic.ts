import { PageData } from '~/types';

export const transformPageData = (pageData: PageData): void => {
    if (!pageData.frontmatter.head) {
        pageData.frontmatter.head = [];
    }

    const addMeta = (
        type: 'name' | 'property',
        name: string | null,
        property: string | null,
        content: keyof PageData['frontmatter']
    ) => {
        const contentValue = pageData.frontmatter[content];
        if (typeof contentValue === 'string') {
            pageData.frontmatter.head!.push([
                'meta',
                {
                    [type]: name || property || '',
                    content: contentValue,
                },
            ]);
        }
    };

    addMeta('name', 'description', null, 'description');
    addMeta('name', 'keywords', null, 'keywords');
    addMeta('property', null, 'og:title', 'title');
    addMeta('property', null, 'og:description', 'description');
    addMeta('property', null, 'og:locale', 'lang');
    addMeta('name', 'twitter:title', null, 'title');
    addMeta('name', 'twitter:description', null, 'description');
};
