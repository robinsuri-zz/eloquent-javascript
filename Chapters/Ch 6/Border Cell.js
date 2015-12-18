+-------+------+-------+
|name   |height|country|
+-------+------+-------+
|Everest|8848  |Nepal  |
|K2     |8611  |India  |
+-------+------+-------+

BorderCell

// Try not to modify draw table function

/* small modification to join()...not passing space
function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join("");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}
*/