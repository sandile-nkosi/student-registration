function getIndex(req, res) {
  res.redirect("/login");
}

function getEnquiries(req, res) {
  res.render("shared/enquiries");
}

function getAbout(req, res) {
  res.render("shared/about");
}

module.exports = {
  getIndex: getIndex,
  getEnquiries: getEnquiries,
  getAbout: getAbout,
};
