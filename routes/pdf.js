const express = require('express');
const router = express.Router();
const fs = require('fs');
const pdf = require('html-pdf');
const hbs = require('express-handlebars').create();

router.post('/', (req, res, next) => {
  hbs.render('pdf_templates/example.hbs', req.body).then((renderedHtml) => {
    pdf.create(renderedHtml).toStream(function(err, stream) {
      stream.pipe(res);
    });
  });
});


module.exports = router;
