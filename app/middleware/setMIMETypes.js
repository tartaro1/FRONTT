export const setCSSMIMEType = (req, res, next) => {
    res.set("Content-Type", "text/css");
    next();
};
export const setJavaScriptMIMEType = (req, res, next) => {
    res.set("Content-Type", "application/javascript");
    next();
};
