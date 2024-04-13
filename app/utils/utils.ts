/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/** 
 * Smoothly scrolls to the section with the given id.
 * @param {string} id - The id of the section to scroll to.
 * @returns {void}
*/
export const smoothScroll = (id: string): void => {
    const section = document.getElementById(id);
    const header = document.querySelector('header');

    if (section && header) {
        const headerHeight = header.offsetHeight;
        const yOffset = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
};

