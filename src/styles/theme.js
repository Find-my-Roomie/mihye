const size = {
    mobile: "770px",
    tabletS: "1023px",
    tabletM: "1220px",
    tabletL: "1280px",
    labtop: "1460px",
    desktop: "1700px"
};

const theme = {
    mobile: `(max-width:${size.mobile})`,
    tabletS: `(max-width:${size.tabletS})`,
    tabletM: `(max-width:${size.tabletM})`,
    tabletL: `(max-width:${size.tabletL})`,
    labtop: `(min-width:${size.labtop})`,
    desktop: `(min-width:${size.desktop})`,
};

export default theme;