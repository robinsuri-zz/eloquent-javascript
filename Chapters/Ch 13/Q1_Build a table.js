  function buildTable(data) {
      var table = document.createElement("table");
      var tblrow = document.createElement("tr");
      var array = Object.keys(data[0]);
      for (var i = 0; i < array.length; i++) {
          var th = document.createElement("th");
          th.appendChild(document.createTextNode(array[i]));
          tblrow.appendChild(th);
      }
      table.appendChild(tblrow);
      for (var i = 0; i < data.length; i++) {
          var tblrow = document.createElement("tr");
          var row = data[i];
          for (var prop in row) {
              var name = row[prop];
              var td = document.createElement("td");
              td.appendChild(document.createTextNode(name));
              if (prop === "height") {
                  td.style.textAlign = "right";
              }
              tblrow.appendChild(td);
          }
          table.appendChild(tblrow);
      }
      return table;
  }
  document.body.appendChild(buildTable(MOUNTAINS));