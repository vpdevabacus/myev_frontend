export const windowScroll = (number) => {
    window.scrollTo(0, 0);
}

export const windowScrollTop = (number) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

}