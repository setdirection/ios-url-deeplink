$(document).ready(function() {
  // run through the snippets and oEmbed away
  embed('#snippets')

  // Add the snippet
  $("#add").click(function() {
    var snippet = $("#snippet").val()
    if (!snippet) {
      status("Would probably make sense to have something to send.")
    } else {
      $.ajax({
        type: 'POST',
        url: '/v1/snippets',
        data: {
          email: $("#email").val(),
          snippet: snippet,
          source: "web"
        }
      }).done(function(msg) { 
        status(JSON.stringify(msg))

        // this is a hack that renders the snippet and prepends it as the top-most item of the list
        $("#snippet").val("")
        if (snippet.indexOf('http') == 0) {
          snippet = '<a href="' + snippet + '">' + snippet + '</a>' 
        }
        $("#snippets").prepend('<div class=snippet>' + snippet + '<div class=created>just now</div></div>')
        embed('#snippets div:first-child')
      }).fail(function(msg) { status("Error: " + JSON.stringify(msg)) })
    }
    return false
  })

  // Admin debug
  $("#admin").click(function() {
    $.ajax({
      type: 'GET',
      url: '/v1/admin',
    }).done(function(msg) { status("<pre>" + msg + "</pre>") })
      .fail(function(msg) { status("Error: " + msg) })
    return false
  })
})

function status(msg) {
  if (typeof msg != "string") msg = JSON.stringify(msg)
  $("#status").html(msg)
}

function embed(selector) {
  $(selector).embedly({
    maxWidth: 500,
    wmode: 'transparent',
    method: 'after',
    key: 'd5275e36f4344ec984f21933967aaa71'
  })
}