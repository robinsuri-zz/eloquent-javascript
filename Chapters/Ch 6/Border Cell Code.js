function rowHeights2(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths2(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable2(rows) {
  var heights = rowHeights2(rows);
  var widths = colWidths2(rows);

  function drawLine2(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join("");
  }

  function drawRow2(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine2(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow2).join("\n");
}

function repeat2(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell2(text,right,bottom_border) {
  this.text = text.split("\n");
  this.right=right;
  this.bottom_border=bottom_border;
}
TextCell2.prototype.minWidth = function() {
  var width =  this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
  return width+2;
};
TextCell2.prototype.minHeight = function() {
  return this.text.length;
};
TextCell2.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    var completeLine = "|"+line + repeat2(" ", width-2-line.length);
    if(this.right==true){
        completeLine+="|";
    }
    result.push(completeLine);
  }
  return result;
};

function BorderCell(inner){
  this.inner=inner;
}
BorderCell.prototype.minWidth = function() {
  return this.inner.minWidth()+2;
};
BorderCell.prototype.minHeight = function() {
  return this.inner.minHeight()+2;
};
BorderCell.prototype.draw = function(width, height) {
    var arr = [];
    var border = "+".concat([repeat2("-", width-2)]);
     if(this.inner.right==true){
        border+="+";
  }
  if(this.inner.bottom_border==false){
  arr.push(border);
   }

  var text = this.inner.draw(width,height-2);
 
  arr.push(text);
  arr.push(border);
  return arr;

};

function dataTable2(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name,index) {
    var bordercell = new BorderCell(new TextCell2(name,false,false));
    if(index==keys.length-1)
      bordercell =new BorderCell(new TextCell2(name,true,false)); 
    return bordercell;

  });
  var body = data.map(function(row,data_index) {
    return keys.map(function(name,keys_index) {
      var value = row[name];
      var tcell = new TextCell2(String(value),false,false);
      if(keys_index==keys.length-1)
        tcell = new TextCell2(String(value),true,false);
      if(data_index==data.length-1)
      {
        if(keys.length-1==keys_index){
        tcell = new BorderCell(new TextCell2(String(value),true,true));
        }
        else
        {
          tcell = new BorderCell(new TextCell2(String(value),false,true));}
        }
      return tcell;
    });
  });
  return [headers].concat(body);
}

console.log(drawTable2(dataTable2(MOUNTAINS)));
