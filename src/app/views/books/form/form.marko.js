// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeapp$1.0.0/src/app/views/books/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1> Cadastro de Livros </h1><form action=\"/books\" method=\"post\">");

  if (data.book.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.book.id) +
      "\"></div>");
  }

  out.w("<div><label for=\"titulo\"> Titulo </label><input type=\"text\" id=\"titulo\" name=\"titulo\" value=\"" +
    marko_escapeXmlAttr(data.book.titulo) +
    "\"></div><div><label for=\"preco\"> Preço</label><input type=\"text\" id=\"preco\" name=\"preco\" value=\"" +
    marko_escapeXmlAttr(data.book.preco) +
    "\"></div><div><label for=\"descricao\">Descrição </label><textarea cols=\"20\" rows=\"10\" id=\"descricao\" name=\"descricao\"> " +
    marko_escapeXml(data.book.descricao) +
    " </textarea></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeapp$1.0.0/src/app/views/books/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
