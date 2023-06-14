function sGet(req, res) {
    res.send("Get Activo");
}
function sPost(req, res) {
    res.send("Post Activo");
}
function sPut(req, res) {
    res.send("Put Activo");
}
function sDelete(req, res) {
    res.send("Delete Activo");
}

module.exports = {
    sGet,
    sPost,
    sPut,
    sDelete
};
