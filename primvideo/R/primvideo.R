#' PRIM Video
#'
#' Embed video player based on a url
#'
#' @import htmlwidgets
#'
#' @export
primvideo <- function(url, type, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    url = url,
    type = type
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'primvideo',
    x,
    width = '100%',
    height = '100%',
    package = 'primvideo',
    elementId = elementId,
    sizingPolicy = htmlwidgets::sizingPolicy(padding = 0, browser.fill = TRUE, knitr.figure = FALSE)
  )
}