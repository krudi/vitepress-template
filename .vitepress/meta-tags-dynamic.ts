export const transformPageData = (pageData) => {
    pageData.frontmatter.head ??= [];

    const addMeta = (type, name, property, content) => {
        pageData.frontmatter.head.push([
            'meta',
            {
                [type]: name || property,
                content: pageData.frontmatter[content]
            }
        ]);
    };

    addMeta('name', 'keywords', null, 'keywords');
    addMeta('name', 'creator', null, 'creator');
    addMeta('name', 'publisher', null, 'publisher');
    addMeta('name', 'author', null, 'author');
    addMeta('property', null, 'og:title', 'title');
    addMeta('property', null, 'og:description', 'description');
    addMeta('property', null, 'og:locale', 'lang');
    addMeta('name', 'twitter:title', null, 'title');
    addMeta('name', 'twitter:description', null, 'description');
};
