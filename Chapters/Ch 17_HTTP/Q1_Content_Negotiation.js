var req = new XMLHttpRequest();
      req.open("GET", "http://eloquentjavascript.net/author", false);
      req.setRequestHeader("Accept","application/rainbows+unicorns");
      req.send(null);
      console.log(req.responseText);