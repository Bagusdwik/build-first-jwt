function verifikasi(req, res, next){
  const getHeaders = req.headers["auth"];
  if (typeof getHeaders !== 'undefined') {
    req.token = getHeaders;
    next();
  } else {
    res.status(403).send({
      message: "you haven't permission to access the resource"
    });
  }
}

module.exports = verifikasi;