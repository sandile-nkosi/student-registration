function getEnquiries(req, res) {
  res.render("shared/enquiries");
}

function getAbout(req, res) {
  res.render("shared/about");
}

module.exports = {
  getEnquiries: getEnquiries,
  getAbout: getAbout,
};
