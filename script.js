function toggleDirection() {
      const algorithm = document.getElementById("algorithm").value;
      const directionInput = document.getElementById("directionInput");
      directionInput.style.display = algorithm === "SCAN" ? "block" : "none";
    }

    function simulate() {
      const algorithm = document.getElementById("algorithm").value;
      const requestStr = document.getElementById('requests').value;
      let requests = requestStr.split(',').map(Number).filter(x => !isNaN(x));
      const head = parseInt(document.getElementById('head').value);
      let seekSequence = [];
      let totalSeek = 0;

      if (algorithm === "SCAN") {
        const direction = document.getElementById('direction').value;
        ({ seekSequence, totalSeek } = scanAlgorithm(requests, head, direction));
      } else if (algorithm === "AntColony") {
        ({ seekSequence, totalSeek } = antColonyAlgorithm(requests, head));
      } else if (algorithm === "OTHDSA") {
        ({ seekSequence, totalSeek } = othdsaAlgorithm(requests, head));
      } else if (algorithm === "ZoneBased") {
        ({ seekSequence, totalSeek } = zoneBasedAlgorithm(requests, head));
      }

      document.getElementById('result').innerHTML =
        `<b>Seek Sequence:</b> ${seekSequence.join(' → ')}<br><b>Total Seek Time:</b> ${totalSeek}`;

      visualize(seekSequence);
    }

    function scanAlgorithm(requests, head, direction) {
      requests.push(head);
      requests.sort((a, b) => a - b);
      const headIndex = requests.indexOf(head);

      let seekSequence = [];
      if (direction === 'up') {
        seekSequence = requests.slice(headIndex).concat(requests.slice(0, headIndex).reverse());
      } else {
        seekSequence = requests.slice(0, headIndex + 1).reverse().concat(requests.slice(headIndex + 1));
      }

      let totalSeek = 0;
      for (let i = 1; i < seekSequence.length; i++) {
        totalSeek += Math.abs(seekSequence[i] - seekSequence[i - 1]);
      }

      return { seekSequence, totalSeek };
    }

    function antColonyAlgorithm(requests, head) {
    let seekSequence = [head];  
    let totalSeek = 0;
    let currentHead = head;
    let remainingRequests = [...requests];

    while (remainingRequests.length > 0) {
        
        remainingRequests.sort((a, b) => Math.abs(a - currentHead) - Math.abs(b - currentHead));

        let nextRequest = remainingRequests.shift(); 
        seekSequence.push(nextRequest);
        totalSeek += Math.abs(nextRequest - currentHead);

        
        currentHead = nextRequest;
    }

    return { seekSequence, totalSeek };
}


    function othdsaAlgorithm(requests, head) {
      requests.sort((a, b) => Math.abs(head - a) - Math.abs(head - b)); 
      let seekSequence = [head, ...requests];
      let totalSeek = 0;

      for (let i = 1; i < seekSequence.length; i++) {
        totalSeek += Math.abs(seekSequence[i] - seekSequence[i - 1]);
      }

      return { seekSequence, totalSeek };
    }

    function zoneBasedAlgorithm(requests, head) {
      let zones = { low: [], mid: [], high: [] };

      requests.forEach(req => {
        if (req < 50) zones.low.push(req);
        else if (req <= 150) zones.mid.push(req);
        else zones.high.push(req);
      });

      zones.low.sort((a, b) => a - b);
      zones.mid.sort((a, b) => a - b);
      zones.high.sort((a, b) => a - b);

      let seekSequence = [head, ...zones.low, ...zones.mid, ...zones.high];
      let totalSeek = 0;

      for (let i = 1; i < seekSequence.length; i++) {
        totalSeek += Math.abs(seekSequence[i] - seekSequence[i - 1]);
      }

      return { seekSequence, totalSeek };
    }

    function visualize(seekSequence) {
      const visual = document.getElementById('visual');
      visual.innerHTML = "";
      seekSequence.forEach(num => {
        const box = document.createElement('div');
        box.className = 'p-4 bg-green-500 text-white rounded-xl shadow font-semibold';
        box.innerText = num;
        visual.appendChild(box);
      });
    }

    toggleDirection();
  